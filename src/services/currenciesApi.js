const MAX_LENGTH = 3;

export const userCoinsFetch = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const obj = await request.json();

  return Object.keys(obj).filter(
    (currency) => currency.length === MAX_LENGTH,
  );
};

export const allData = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const obj = await request.json();
  return obj;
};
