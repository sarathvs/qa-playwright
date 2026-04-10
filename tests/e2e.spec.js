// tests/e2e.spec.js
const { test, expect, request } = require('@playwright/test');

test('E2E: UI action + API validation', async ({ page }) => {

  // UI Login
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add item
  await page.click('text=Add to cart');

  // Simulate token (in real app, extract from cookies/localStorage)
  const token = 'dummy-token';

  // API validation
  const apiContext = await request.newContext({
    baseURL: 'https://api.example.com',
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  const response = await apiContext.get('/cart');

  expect(response.status()).toBe(200);
});