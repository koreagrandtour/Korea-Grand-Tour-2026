export async function onRequest() {
  return Response.json({
    provider: "kakao",
    capabilities: ["client-config", "directions"],
  }, {
    headers: {
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
