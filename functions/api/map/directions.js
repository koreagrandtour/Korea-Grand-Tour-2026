const KAKAO_DIRECTIONS_URL = "https://apis-navi.kakaomobility.com/v1/waypoints/directions";

function jsonResponse(body, init = {}) {
  return Response.json(body, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
      ...(init.headers || {}),
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "no-store",
    },
  });
}

export async function onRequestPost({ request, env }) {
  if (!env.KAKAO_REST_API_KEY) {
    return jsonResponse({ error: "KAKAO_REST_API_KEY is not configured" }, { status: 503 });
  }

  let input;
  try {
    input = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON request body" }, { status: 400 });
  }

  const kakaoResponse = await fetch(KAKAO_DIRECTIONS_URL, {
    method: "POST",
    headers: {
      "Authorization": `KakaoAK ${env.KAKAO_REST_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      priority: input.priority || "RECOMMEND",
      car_fuel: input.car_fuel || "GASOLINE",
      car_hipass: Boolean(input.car_hipass),
      alternatives: Boolean(input.alternatives),
      summary: input.summary !== false,
      origin: input.origin,
      destination: input.destination,
      waypoints: input.waypoints || [],
    }),
  });

  const text = await kakaoResponse.text();
  return new Response(text, {
    status: kakaoResponse.status,
    headers: {
      "Content-Type": kakaoResponse.headers.get("Content-Type") || "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
