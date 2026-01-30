export default {
  async fetch(request) {
    const url = new URL(request.url);
    const apiid = url.searchParams.get("apiid");

    if (!apiid) {
      return new Response("Missing apiid", { status: 400 });
    }

    const target =
      "https://nomoreangel.de/api-reader/?rawOut=on&apiid=" +
      encodeURIComponent(apiid);

    const resp = await fetch(target);

    return new Response(resp.body, {
      status: resp.status,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    });
  },
};
