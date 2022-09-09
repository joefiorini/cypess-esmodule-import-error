import { defineConfig } from "cypress";
import someTask from "./cypress/support/some-task";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", someTask);
      // implement node event listeners here
    },
  },
});
