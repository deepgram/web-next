import { defineConfig } from "astro/config";

const globalPanel = function () {
  const integration = {
    name: "import-panel",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript(
          "page-ssr",
          'import Panel from "../src/components/layout/Panel.astro"; global.Panel = Panel;'
        );
      },
    },
  };
  return integration;
};

// https://astro.build/config
export default defineConfig({
  integrations: [globalPanel()],
});
