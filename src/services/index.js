async function fetchEconomyApi() {
  const api = 'https://economia.awesomeapi.com.br/json/all';
  const fetchApi = await fetch(api);
  const data = await fetchApi.json();
  const three = 3;
  const dataArray = Object.keys(data).filter((currency) => currency.length === three);
  return dataArray;
}

export default fetchEconomyApi;
