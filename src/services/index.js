export const fetchingCoin = async () => {
  const coinData = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await coinData.json();
  const responseArray = Object.keys(response)
    .filter((element) => element !== 'USDT');
  return responseArray;
};

export const fetchExchange = async () => {
  const exchangeData = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await exchangeData.json();
  return response;
};
