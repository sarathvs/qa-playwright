// utils/apiHelper.js
const { request } = require('@playwright/test');

async function getCartDetails(baseURL, token) {
  const apiContext = await request.newContext({
    baseURL,
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  const response = await apiContext.get('/cart');
  return response;
}

module.exports = { getCartDetails };