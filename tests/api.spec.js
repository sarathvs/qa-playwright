// tests/api.spec.js
const { test, expect, request } = require('@playwright/test');

test('API: get cart details', async () => {
  const apiContext = await request.newContext({
    baseURL: 'https://reqres.in/api'
  });

  const response = await apiContext.get('');

  expect(response.status()).toBe(200);
});