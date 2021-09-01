export const paymentMethodObject = [
  'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

export const categoriesObject = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];
// By Lucas Caribé
export const fetchCurrencies = async () => {
  const SIGLA = 3;
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  return Object.keys(response).filter(
    (currencie) => currencie.length === SIGLA,
  );
};
