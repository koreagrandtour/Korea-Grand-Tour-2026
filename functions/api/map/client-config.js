export async function onRequest({ env }) {
  return Response.json({
    provider: "kakao",
    kakaoJavascriptKey: env.KAKAO_JAVASCRIPT_KEY || "",
    kakaoJavascriptKeyConfigured: Boolean(env.KAKAO_JAVASCRIPT_KEY),
  }, {
    headers: {
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
