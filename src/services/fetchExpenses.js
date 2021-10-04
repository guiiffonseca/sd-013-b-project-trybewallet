const API = 'https://economia.awesomeapi.com.br/json/all';

const fetchExpenses = async () => {
  const response = await fetch(API);
  const data = await response.json();
  delete data.USDT;
  return data;
};

export default fetchExpenses;
