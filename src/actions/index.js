import requestAPI from '../services';
// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

const recieveCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const currencies = await requestAPI();
  delete currencies.USDT;

  dispatch(recieveCurrencies(Object.values(currencies)));
};
