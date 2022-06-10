import { defineNuxtConfig } from "nuxt";
import { resolve } from "path";
import { copyFiles } from "../scripts/copyFiles";

copyFiles("../content/www", "public", [".md"]);
copyFiles("static", "public", []);

export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    sources: [resolve(__dirname, "../content/www")],
    ignores: [".png"],
  },
});
