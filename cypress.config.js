const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.google.com/',
    defaultCommandTimeout: 60000,
  },
  chromeWebSecurity: false,
  failOnStatusCode: false,
})