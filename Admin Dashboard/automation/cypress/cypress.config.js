const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.com",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: false,

    setupNodeEvents(on, config) {
      // place for future plugins or custom tasks
      return config;
    },
  },

  env: {
    admin_username: "admin",
    admin_password: "password123",
    staff_username: "staff_user",
    staff_password: "password123",
  },
});
