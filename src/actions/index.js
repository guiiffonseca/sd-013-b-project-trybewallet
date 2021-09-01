// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  // currency é nome da key da API
  currencies: currencies.filter((currency) => currency !== 'USDT'),
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(getCurrencies(Object.keys(data)));
};
