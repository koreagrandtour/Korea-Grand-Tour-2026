import math
import os
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / ".local_tools" / "python"))

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parent
OUT = ROOT / "kgt_15s_one_road_draft.mp4"
W, H = 1080, 1920
FPS = 30
DURATION = 15
TOTAL = FPS * DURATION

INK = (11, 16, 23)
WHITE = (248, 248, 245)
BLUE = (0, 87, 184)
ORANGE = (255, 106, 0)
ROAD = (43, 48, 55)


def font(size: int) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


TITLE_FONT = font(116)
SMALL_FONT = font(34)


def ease_out_cubic(x: float) -> float:
    x = max(0.0, min(1.0, x))
    return 1 - (1 - x) ** 3


def text_for_time(t: float) -> str:
    if t < 3:
        return "One road."
    if t < 7:
        return "Four days across Korea."
    if t < 12:
        return "Cars, friends, memories."
    return "Korea Grand Tour 2026"


def local_text_time(t: float) -> float:
    if t < 3:
        return t
    if t < 7:
        return t - 3
    if t < 12:
        return t - 7
    return t - 12


def wrap_text(draw: ImageDraw.ImageDraw, text: str, max_width: int):
    words = text.split()
    lines = []
    line = ""
    for word in words:
        test = f"{line} {word}".strip()
        if draw.textbbox((0, 0), test, font=TITLE_FONT)[2] <= max_width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def draw_car(layer, x, y, scale, color, angle=-16):
    car = Image.new("RGBA", (180, 82), (0, 0, 0, 0))
    d = ImageDraw.Draw(car)
    d.rounded_rectangle((12, 22, 168, 72), radius=24, fill=color + (255,))
    d.rounded_rectangle((50, 12, 126, 36), radius=14, fill=(9, 13, 18, 135))
    d.ellipse((35, 62, 62, 89), fill=(7, 8, 10, 255))
    d.ellipse((118, 62, 145, 89), fill=(7, 8, 10, 255))
    car = car.resize((int(180 * scale), int(82 * scale)))
    car = car.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)
    layer.alpha_composite(car, (int(x), int(y)))


def make_frame(i: int) -> bytes:
    t = i / FPS
    img = Image.new("RGB", (W, H), INK)
    px = img.load()
    for y in range(H):
        k = y / H
        sky = (
            int(23 * (1 - k) + 18 * k),
            int(52 * (1 - k) + 24 * k),
            int(79 * (1 - k) + 32 * k),
        )
        hill = (
            int(81 * (1 - k) + 18 * k),
            int(100 * (1 - k) + 24 * k),
            int(73 * (1 - k) + 32 * k),
        )
        col = sky if y < H * 0.48 else hill
        for x in range(W):
            px[x, y] = col

    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((610, 85, 1180, 655), fill=(255, 106, 0, 54))
    glow = glow.filter(ImageFilter.GaussianBlur(52))
    img = Image.alpha_composite(img.convert("RGBA"), glow)

    road_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    rd = ImageDraw.Draw(road_layer)
    shift = -95 * (t / DURATION)
    rd.arc((120 + shift, 460, 1510 + shift, 2100), start=186, end=298, fill=ROAD + (255,), width=205)
    rd.arc((238 + shift, 570, 1390 + shift, 1980), start=188, end=298, fill=(248, 248, 245, 138), width=9)
    rd.arc((310 + shift, 660, 1280 + shift, 1850), start=190, end=296, fill=(248, 248, 245, 72), width=5)
    img = Image.alpha_composite(img, road_layer)

    car_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    move = ease_out_cubic(min(1, t / 2.2)) * 360 - 220 - (t * 18)
    bob = math.sin(t * 3.0) * 5
    draw_car(car_layer, 720 + move, 1320 + bob, 1.0, WHITE)
    draw_car(car_layer, 550 + move * .92, 1180 + bob * .8, .82, ORANGE)
    draw_car(car_layer, 404 + move * .84, 1060 + bob * .5, .68, BLUE)
    draw_car(car_layer, 280 + move * .75, 960 + bob * .4, .56, (18, 22, 28))
    img = Image.alpha_composite(img, car_layer)

    shade = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shade)
    sd.rectangle((0, 0, W, H), fill=(0, 0, 0, 26))
    sd.rectangle((0, 1050, W, H), fill=(0, 0, 0, 88))
    img = Image.alpha_composite(img, shade)

    d = ImageDraw.Draw(img)
    d.rounded_rectangle((92, 1410, 212, 1420), radius=5, fill=BLUE)
    d.rounded_rectangle((212, 1410, 272, 1420), radius=5, fill=ORANGE)

    phrase = text_for_time(t)
    lt = local_text_time(t)
    alpha = int(255 * ease_out_cubic(min(1, lt / .55)))
    if (2.65 < t < 3) or (6.65 < t < 7) or (11.65 < t < 12):
        alpha = int(255 * max(0, (math.ceil(t) - t) / .35))
    text_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    td = ImageDraw.Draw(text_layer)
    lines = wrap_text(td, phrase, 850)
    y = 1462 + int((1 - ease_out_cubic(min(1, lt / .55))) * 55)
    for line in lines:
        td.text((92, y), line, font=TITLE_FONT, fill=WHITE + (alpha,))
        y += 112
    td.text((92, 1800), "KOREA GRAND TOUR", font=SMALL_FONT, fill=(248, 248, 245, 158))
    img = Image.alpha_composite(img, text_layer)
    return img.convert("RGB").tobytes()


def main():
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    cmd = [
        ffmpeg,
        "-y",
        "-f",
        "rawvideo",
        "-vcodec",
        "rawvideo",
        "-s",
        f"{W}x{H}",
        "-pix_fmt",
        "rgb24",
        "-r",
        str(FPS),
        "-i",
        "-",
        "-an",
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        "-crf",
        "20",
        str(OUT),
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    assert proc.stdin is not None
    for i in range(TOTAL):
        proc.stdin.write(make_frame(i))
    proc.stdin.close()
    code = proc.wait()
    if code:
        raise SystemExit(code)
    print(OUT)


if __name__ == "__main__":
    main()
