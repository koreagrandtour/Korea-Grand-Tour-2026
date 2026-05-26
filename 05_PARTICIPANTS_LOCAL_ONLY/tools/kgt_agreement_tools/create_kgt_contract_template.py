from pathlib import Path

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image as RLImage,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


BASE = Path("/Users/Francois/Documents/Codex/Main Playground/KGT_2026_registration_followups")
TEMPLATE_DIR = BASE / "templates"
OUTPUT = TEMPLATE_DIR / "KGT_2026_contract_template.pdf"
TERMS = TEMPLATE_DIR / "KGT_terms_conditions_source.txt"
LOGO = Path("/Users/Francois/Documents/Francois/Korea Grand Tour/BI/656802878_992453920312441_3590077937490717863_n.jpg")
WATERMARK = TEMPLATE_DIR / "_kgt_watermark.png"
HEADER_LOGO = TEMPLATE_DIR / "_kgt_header_logo.png"
KOREAN_FONT = "/System/Library/Fonts/Supplemental/AppleGothic.ttf"


NOISE_LINES = {
    "Home",
    "About",
    "Route",
    "Rides",
    "Join",
    "Terms & Conditions",
    "Contents",
    "Korea Grand Tour",
    "Powered by",
    "Create your own unique website with customizable templates.",
    "Get Started",
    "A journey built on roads, people, culture, and unforgettable memories across Korea.",
}


def make_assets() -> None:
    image = Image.open(LOGO).convert("RGBA")
    transparent_logo = Image.new("RGBA", image.size, (255, 255, 255, 0))
    header_logo = Image.new("RGBA", image.size, (255, 255, 255, 0))
    transparent_pixels = []
    header_pixels = []
    for red, green, blue, alpha in image.getdata():
        if red < 42 and green < 42 and blue < 42:
            transparent_pixels.append((255, 255, 255, 0))
            header_pixels.append((255, 255, 255, 0))
        elif blue > red + 35 and blue > green + 20:
            transparent_pixels.append((red, green, blue, alpha))
            header_pixels.append((20, 105, 205, alpha))
        else:
            transparent_pixels.append((red, green, blue, alpha))
            header_pixels.append((17, 24, 39, alpha))
    transparent_logo.putdata(transparent_pixels)
    header_logo.putdata(header_pixels)

    header = header_logo.copy()
    header.thumbnail((260, 260))
    header.save(HEADER_LOGO, optimize=True)

    watermark_source = transparent_logo.copy()
    watermark_source.thumbnail((540, 540))
    gray = watermark_source.convert("L")
    alpha_channel = watermark_source.getchannel("A")
    watermark = Image.new("RGBA", watermark_source.size, (107, 114, 128, 0))
    pixels = []
    for value, alpha in zip(gray.tobytes(), alpha_channel.tobytes()):
        darkness = max(0, 185 - value)
        pixels.append((107, 114, 128, min(7, int(darkness * 0.04), int(alpha * 0.04))))
    watermark.putdata(pixels)
    watermark.save(WATERMARK, optimize=True)

    WATERMARK.chmod(0o600)
    HEADER_LOGO.chmod(0o600)


def clean_terms() -> list[tuple[str, str]]:
    lines = [line.strip() for line in TERMS.read_text(encoding="utf-8").splitlines()]
    cleaned: list[str] = []
    in_toc = False
    started = False

    for line in lines:
        if not line:
            continue
        if line.startswith("Terms & Conditions -"):
            continue
        if line.startswith("Korea Grand Tour Terms & Conditions"):
            if started:
                continue
            started = True
            cleaned.append(line)
            continue
        if not started:
            continue
        if line == "Contents":
            in_toc = True
            continue
        if line in NOISE_LINES:
            continue
        if line == "Contents":
            in_toc = True
            continue
        if in_toc and line != "1. Introduction":
            continue
        if line == "1. Introduction":
            in_toc = False
        if line.startswith("By taking part,"):
            cleaned.append(line)
            break
        cleaned.append(line)

    sections: list[tuple[str, str]] = []
    current_title = "Korea Grand Tour Terms & Conditions"
    current_body: list[str] = []

    for line in cleaned:
        is_heading = (
            line.startswith("Important Points at a Glance")
            or line.startswith("Last updated:")
            or (line[:2].isdigit() and ". " in line[:5])
            or (line[:1].isdigit() and ". " in line[:4])
            or line.startswith("12.1 ")
            or line.startswith("12.2 ")
            or line.startswith("12.3 ")
        )
        if line == "Korea Grand Tour Terms & Conditions":
            continue
        if is_heading:
            if current_body:
                sections.append((current_title, " ".join(current_body)))
                current_body = []
            current_title = line
        else:
            current_body.append(line)

    if current_body:
        sections.append((current_title, " ".join(current_body)))

    registration_body = (
        "Every person who participates in KGT must be registered with their name, phone number, and email address. "
        "The KGT team will request this information through the registration form. Any person who was not registered "
        "may be removed from the event directly."
    )
    accommodation_body = (
        "Participants beyond the first two people in a team may still participate as part of that team. "
        "However, hotel rooms and included accommodation coverage arranged by KGT are based on two people per team only. "
        "A third or additional person is responsible for arranging any extra accommodation directly with the hotel, "
        "or for asking the hotel to amend the booking directly, subject to hotel availability, policy, and cost."
    )
    renumbered_sections: list[tuple[str, str]] = []
    for title, body in sections:
        if title.startswith("11."):
            renumbered_sections.append(("11. Registration, Acceptance, and Removal", body))
            renumbered_sections.append(("11.1 Participant Registration Requirement", registration_body))
            continue
        if title.startswith("12."):
            title = title.replace("12.", "13.", 1)
        elif title.startswith("13."):
            title = title.replace("13.", "14.", 1)
        elif title.startswith("14."):
            title = title.replace("14.", "15.", 1)
        elif title.startswith("15."):
            renumbered_sections.append(("16. Team Size and Accommodation", accommodation_body))
            title = title.replace("15.", "17.", 1)
        elif title.startswith("16."):
            title = title.replace("16.", "18.", 1)
        elif title.startswith("17."):
            title = title.replace("17.", "19.", 1)
        elif title.startswith("18."):
            title = title.replace("18.", "20.", 1)
        elif title.startswith("19."):
            title = title.replace("19.", "21.", 1)
        elif title.startswith("20."):
            title = title.replace("20.", "22.", 1)
        elif title.startswith("21."):
            title = title.replace("21.", "23.", 1)
        elif title.startswith("22."):
            title = title.replace("22.", "24.", 1)
        renumbered_sections.append((title, body))
    sections = renumbered_sections
    return sections


def draw_watermark(canvas, doc) -> None:
    canvas.saveState()
    page_width, page_height = A4
    canvas.setFillColor(colors.white)
    canvas.rect(0, 0, page_width, page_height, stroke=0, fill=1)
    canvas.drawImage(
        str(WATERMARK),
        (page_width - 92 * mm) / 2,
        (page_height - 92 * mm) / 2,
        width=92 * mm,
        height=92 * mm,
        preserveAspectRatio=True,
        mask="auto",
    )
    canvas.setFillColor(colors.HexColor("#6B7280"))
    canvas.setFont("Helvetica", 7)
    canvas.drawCentredString(page_width / 2, 9 * mm, f"Korea Grand Tour 2026 Participant Agreement | Page {doc.page}")
    canvas.restoreState()


def para(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text.replace("&", "&amp;"), style)


def build(output: Path = OUTPUT, participant_name: str = "") -> None:
    make_assets()
    pdfmetrics.registerFont(TTFont("AppleGothic", KOREAN_FONT))

    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="KGTBrand",
            parent=styles["Title"],
            alignment=TA_CENTER,
            fontName="Helvetica-Bold",
            fontSize=24,
            leading=28,
            textColor=colors.HexColor("#111827"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="KGTSubtitle",
            parent=styles["BodyText"],
            alignment=TA_CENTER,
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=colors.HexColor("#4B5563"),
            spaceAfter=12,
        )
    )
    styles.add(
        ParagraphStyle(
            name="KGTSection",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=14,
            textColor=colors.HexColor("#111827"),
            spaceBefore=8,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="KGTBody",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=10.5,
            textColor=colors.HexColor("#111827"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="KGTKorean",
            parent=styles["BodyText"],
            fontName="AppleGothic",
            fontSize=8.2,
            leading=10.5,
            textColor=colors.HexColor("#111827"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="CellText",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=8,
            leading=9.5,
            textColor=colors.HexColor("#111827"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="TermHeading",
            parent=styles["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=7.0,
            leading=8.0,
            textColor=colors.HexColor("#111827"),
            spaceBefore=4,
            spaceAfter=1.5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="TermTitle",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=11.5,
            textColor=colors.HexColor("#111827"),
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="TermBody",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=5.55,
            leading=6.18,
            textColor=colors.HexColor("#111827"),
            spaceAfter=1.7,
        )
    )

    doc = BaseDocTemplate(
        str(output),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=15 * mm,
        title="Korea Grand Tour 2026 Participant Agreement",
    )

    page_width, page_height = A4
    normal_frame = Frame(16 * mm, 15 * mm, page_width - 32 * mm, page_height - 29 * mm, id="normal")
    gutter = 5 * mm
    col_width = (page_width - 32 * mm - gutter) / 2
    left_col = Frame(14 * mm, 13 * mm, col_width + 2 * mm, page_height - 26 * mm, id="left")
    right_col = Frame(14 * mm + col_width + gutter + 2 * mm, 13 * mm, col_width + 2 * mm, page_height - 26 * mm, id="right")
    doc.addPageTemplates(
        [
            PageTemplate(id="Normal", frames=[normal_frame], onPage=draw_watermark),
            PageTemplate(id="Terms", frames=[left_col, right_col], onPage=draw_watermark),
        ]
    )

    logo = RLImage(str(HEADER_LOGO), width=18 * mm, height=18 * mm)
    logo.hAlign = "CENTER"
    story = [
        logo,
        Spacer(1, 3),
        Paragraph("Korea Grand Tour 2026", styles["KGTBrand"]),
        Paragraph("Participant Agreement and Registration Confirmation", styles["KGTSubtitle"]),
        para(
            "This agreement confirms the participant's registration for Korea Grand Tour 2026 and officially "
            "recognizes the person named below as a participant, subject to completion of the refundable deposit, "
            "payment of the participation fee during the stated payment window, and acceptance of the "
            "Terms & Conditions.",
            styles["KGTBody"],
        ),
    ]

    participant_rows = [
        ["Participant name", para(participant_name, styles["KGTKorean"]) if participant_name else "", "Team name", ""],
        ["Email", "", "Team size", ""],
        ["Phone", "", "Vehicle", ""],
        ["", "", "Registration plate", ""],
        ["", "", "Insurance coverage", ""],
    ]
    table = Table(participant_rows, colWidths=[31 * mm, 50 * mm, 31 * mm, 50 * mm], rowHeights=[7.8 * mm] * len(participant_rows))
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#F3F4F6")),
                ("BACKGROUND", (2, 0), (2, -1), colors.HexColor("#F3F4F6")),
                ("TEXTCOLOR", (0, 0), (-1, -1), colors.HexColor("#111827")),
                ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
                ("FONTNAME", (2, 0), (2, -1), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.2),
                ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#C7CDD4")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.extend([Spacer(1, 4), table])

    deposit_rows = [
        ["Amount", "KRW 100,000"],
        ["Due", "Within a week of receiving this agreement"],
        ["Refund", "Refunded after the event"],
    ]
    deposit_table = Table(deposit_rows, colWidths=[31 * mm, 131 * mm])
    deposit_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#F5F7FA")),
                ("TEXTCOLOR", (0, 0), (0, -1), colors.HexColor("#111827")),
                ("TEXTCOLOR", (1, 0), (1, -1), colors.HexColor("#111827")),
                ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.2),
                ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#D8DEE6")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )

    payment_rows = [
        ["Amount", "KRW 200,000"],
        ["Payment window", "June 10 to 20"],
        ["Reminder", "An additional reminder will be sent"],
        ["Bank", "Hana Bank"],
        ["Account", "66091111399407"],
        ["Beneficiary", para("프랑수아", styles["KGTKorean"])],
    ]
    payment = Table(payment_rows, colWidths=[31 * mm, 131 * mm])
    payment.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#F5F7FA")),
                ("TEXTCOLOR", (0, 0), (0, -1), colors.HexColor("#111827")),
                ("TEXTCOLOR", (1, 0), (1, -1), colors.HexColor("#111827")),
                ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
                ("FONTNAME", (1, 1), (1, 2), "Helvetica"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.2),
                ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#D8DEE6")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 3.5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.extend([
        para("Deposit", styles["KGTSection"]),
        deposit_table,
        para("Payment Information", styles["KGTSection"]),
        payment,
    ])

    agreement_sections = [
        (
            "Teams Larger Than Two",
            "Participants beyond the first two people are still participating as part of their team. "
            "However, hotel rooms and included accommodation coverage are arranged based on two people per team only. "
            "A third or additional person may book a room directly with the hotel or ask the hotel to amend the booking directly, "
            "subject to hotel availability, policy, and cost.",
        ),
        (
            "Acknowledgment",
            "By signing below, the participant confirms that the registration information is accurate, accepts the payment "
            "details above, and agrees to the KGT Terms & Conditions included in this document.",
        ),
    ]
    for title, body in agreement_sections:
        story.append(para(title, styles["KGTSection"]))
        story.append(para(body, styles["KGTBody"]))

    signature = Table(
        [["Participant signature", "Date"], ["", ""]],
        colWidths=[101 * mm, 61 * mm],
        rowHeights=[7 * mm, 16 * mm],
    )
    signature.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#F3F4F6")),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.5),
                ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#C7CDD4")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    story.extend([Spacer(1, 7), signature, NextPageTemplate("Terms"), PageBreak()])

    story.append(para("Korea Grand Tour Terms & Conditions", styles["TermTitle"]))
    story.append(para("Source: koreagrandtour.weebly.com/terms--conditions.html | Last updated: 31 March 2026", styles["TermBody"]))

    for title, body in clean_terms():
        story.append(para(title, styles["TermHeading"]))
        story.append(para(body, styles["TermBody"]))

    doc.build(story)
    output.chmod(0o600)


if __name__ == "__main__":
    build()
