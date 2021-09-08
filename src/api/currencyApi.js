const currencies = async () => {
  const res = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await res.json();
  delete data.USDT;
  return data;
};

export default currencies;
