const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchURL = async () => {
  const result = await fetch(BASE_URL);
  return result.json();
};

const expenses = () => fetchURL();

export default expenses;
