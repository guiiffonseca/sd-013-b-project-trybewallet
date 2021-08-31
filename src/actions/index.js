// Coloque aqui suas actions
export const LOGIN = 'LOGIN_ACTION';
export const WALLET_CURRENCY = 'WALLET_CURRENCY';

const setLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const setCurrency = (payload) => ({
  type: WALLET_CURRENCY,
  payload,
});

export const getCurrencyThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const payload = await response.json();
  dispatch(setCurrency(payload));
};

export default setLogin;
