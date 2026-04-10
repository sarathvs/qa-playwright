// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true,
    baseURL: 'https://www.saucedemo.com'
  },
  reporter: [['html', { open: 'never' }]],
});