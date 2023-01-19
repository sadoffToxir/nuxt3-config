import { mount } from "cypress/vue";
import vuetify from "@/plugins/vuetify";

Cypress.Commands.add("mount", (Component, options) => {
  const root = document.getElementById("__cy_root");
  // Vuetify styling
  if (!root?.classList.contains("v-application")) {
    root?.classList.add("v-application");
  }
  // Vuetify selector used for popup elements to attach to the DOM
  root?.setAttribute("data-app", "true");

  return mount(Component, {
    global: {
      plugins: [vuetify],
    },
    ...options, // To override values for specific tests
  });
});