export async function requisitionApi() {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  delete response.USDT;
  const currency = Object.keys(response);
  return currency;
}

export async function ratesApi() {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  return response;
}
