import { generateApi } from "swagger-typescript-api";
import { resolve } from "path";

generateApi({
  name: "Api.ts",
  output: resolve(process.cwd(), "./src/api"),
  url: process.env.BE_URL,
  httpClientType: "axios",
});
