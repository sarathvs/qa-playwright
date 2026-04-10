// tests/api.spec.js
const { test, expect, request } = require('@playwright/test');

test('API: get cart details', async () => {
  const apiContext = await request.newContext({
    baseURL: 'https://api.example.com'
  });

  const response = await apiContext.get('/cart');

  expect(response.status()).toBe(200);
});