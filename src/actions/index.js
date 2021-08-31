// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const login = (email) => ({
  type: LOGIN,
  payload: email,
});

const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies,
});

export const getCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;

  dispatch(receiveCurrencies(Object.values(currencies)));
};
