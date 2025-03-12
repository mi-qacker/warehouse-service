import { testing } from "@oak/oak";
import { assertEquals } from "jsr:@std/assert";
import { router } from "./router.ts";

Deno.test('GET / return "Hello world"', async () => {
  const mockCtx = testing.createMockContext({
    method: "GET",
    path: "/",
  });

  await router.routes()(mockCtx, () => Promise.resolve());

  assertEquals(mockCtx.response.body, "Hello world");
  assertEquals(mockCtx.response.status, 200);
});
