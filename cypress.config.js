const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'i3693v',
  "watchForFileChanges": false,
  "chromeWebSecurity": false,
  "viewportWidth": 1000,
  "viewportHeight": 600,
  "waitForAnimations": true,
  "animationDistanceThreshold": 200,
  "defaultCommandTimeout": 6000,
  "execTimeout": 60000,
  "pageLoadTimeout": 60000,
  "requestTimeout": 15000,
  "responseTimeout": 15000,
  "video": true,
  "failOnStatusCode": false,
  e2e: {
    setupNodeEvents(on, config) {
    },
    testIsolation: false,
  },
});