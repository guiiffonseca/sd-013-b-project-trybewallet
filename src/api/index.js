const URL = 'https://economia.awesomeapi.com.br/json/all';

async function fetchExchanges() {
  const request = await fetch(URL);
  const response = await request.json();
  return response;
}

export default fetchExchanges;
