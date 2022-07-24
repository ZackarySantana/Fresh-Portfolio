import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  _: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  const resp = await ctx.next();
  resp.headers.set("cache-control", "public, max-age=31536000, immutable")
  return resp;
}