import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  "astro:config:setup": ({ injectScript }) => {
    injectScript(
      "page-ssr",
      'import Panel from "./src/components/layout/Panel.astro"; global.Panel = Panel;'
    );
  },
});
