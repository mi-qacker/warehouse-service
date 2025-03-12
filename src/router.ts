import { Router } from "@oak/oak";

export const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello world";
});
