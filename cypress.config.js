const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    e2e: {
      specPattern: 'cypress/e2e/tests/openCart_test_spec.js',
      supportFile: false,
      baseUrl: "https://opencart.abstracta.us", 
    },
  },
});
