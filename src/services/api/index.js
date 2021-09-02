const CURRECIES_URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const result = await fetch(CURRECIES_URL);
  return result.json();
};

export default getCurrencies;
