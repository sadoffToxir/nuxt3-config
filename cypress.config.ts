import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'webpack',
    },
    indexHtmlFile: "cypress/support/component-index.html",
    supportFolder: "cypress/support",
    video: false,
  },
});
