const api = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async () => {
  const data = await fetch(api);
  return data.json();
};

export default fetchApi;
