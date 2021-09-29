const api = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async () => {
  const result = await fetch(api);
  return result.json();
};

export default fetchApi;
