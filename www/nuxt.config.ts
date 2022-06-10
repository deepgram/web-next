import { defineNuxtConfig } from "nuxt";
import { resolve } from "path";
import { copyFiles } from "../scripts/copyFiles";

copyFiles("static", "public", []); // anything in /static goes in /public (so we can .gitignore public)
copyFiles("../static", "public/shared", []); // anything in /static goes in /public/shared (files common to multiple sites)
copyFiles("../content/www", "public", [".md"]); // anything non-markdown files in ../content/www/ goes in /public (blog images for e.g.)

export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    sources: [resolve(__dirname, "../content/www")],
    ignores: [".png"],
  },
});
