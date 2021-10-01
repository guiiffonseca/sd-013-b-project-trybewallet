const fetchAPI = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
};

// export const fetchExchange = async () => {
//   const response = await fetch('https://economia.awesomeapi.com.br/last/USD,CAD,EUR,GBP,ARS,BTC,LTC,JPY,CHF,AUD,CNY,ILS,ETH,XRP');
//   const data = await response.json();
//   return data;
// };

export default fetchAPI;
