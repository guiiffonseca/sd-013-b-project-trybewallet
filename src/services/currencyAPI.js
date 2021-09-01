const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchURL = async () => {
  const response = await fetch(`${BASE_URL}`);
  const object = response.json();
  return object;
};

export default fetchURL;
