const URL = 'https://economia.awesomeapi.com.br/json/all';

export const paymentMethodObject = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

export const categoriesObject = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];

export const fetchCurrencies = async () => {
  const request = await fetch(URL);
  const response = await request.json();
  return Object.keys(response).filter((currencie) => currencie !== 'USDT');
};

// Se a chamada da função tiver parâmetro vai retornar apenas um objeto, senão um array de objetos
export const fetchExchanges = async () => {
  const request = await fetch(URL);
  const response = await request.json();
  return response;
  // .reduce((acc, { code, name, ask }) => {
  //   acc[code] = { code, name, ask };
  //   return acc;
  // }, {});
};
