const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  chromeWebSecurity: false,
  e2e: {
    env: {
      BASE_URL: "https://www.saucedemo.com/",
      USER_NAME: "problem_user",
      PASSWORD: "secret_sauce"
    },
    baseUrl: process.env.BASE_URL,
    userName: process.env.USER_NAME,
    password: process.env.PASSWORD,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
