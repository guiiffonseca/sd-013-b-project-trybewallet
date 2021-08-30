// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  currencies: currencies.filter((currency) => currency !== 'USDT'),
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(getCurrenciesSuccess(Object.keys(data)));
};
