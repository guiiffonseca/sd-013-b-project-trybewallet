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
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  return Object.keys(response).filter((currencie) => currencie !== 'USDT');
};

export const fetchExchanges = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  return Object.values(response).map((exchange) => exchange);
  // .reduce((acc, { code, name, ask }) => {
  //   acc[code] = { code, name, ask };
  //   return acc;
  // }, {});
};
