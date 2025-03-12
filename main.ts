import app from "./src/app.ts";

const PORT = Number(Deno.env.get("PORT") ?? "8080");

if (import.meta.main) {
  app.listen({ port: PORT });
}
