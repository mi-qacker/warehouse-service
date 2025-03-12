import { testing } from "@oak/oak";
import { router } from "./app.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test('GET / return "Hello world"', async () => {
  const mockCtx = testing.createMockContext({
    method: "GET",
    path: "/",
  });

  await router.routes()(mockCtx, () => Promise.resolve());

  assertEquals(mockCtx.response.body, "Hello world");
  assertEquals(mockCtx.response.status, 200);
});
