import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
const HOST = "0.0.0.0";
const PORT = 8080;

const app = new Application();
const router = new Router();

router.get("/", async (ctx) => {
  const text = await Deno.readTextFile(`${Deno.cwd()}/index.html`);
  ctx.response.headers.set("Content-Type", "text/html");
  ctx.response.body = text;
});

router.get("/:path+", async (ctx) => {
  await send(ctx, ctx.params.path || "", {
    root: `${Deno.cwd()}/`,
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT} ...`);
await app.listen(`${HOST}:${PORT}`);
