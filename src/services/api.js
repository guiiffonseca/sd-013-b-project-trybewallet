const BASE_API = 'https://economia.awesomeapi.com.br/json/all';

export const getAllCurrencies = async () => {
  const response = await fetch(BASE_API);
  const data = await response.json();

  return Object.keys(data).filter((currency) => currency !== 'USDT');
};
export const getExchangeRates = async () => {
  const response = await fetch(BASE_API);
  const data = await response.json();

  return data;
};
