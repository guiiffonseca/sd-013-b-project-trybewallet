// Coloque aqui suas actions
const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

export const ACTIONS = {
  LOGIN: 'LOGIN',
  GET_CURRENCIES: 'GET_CURRENCIES',
};

export const setEmail = (email) => ({ type: ACTIONS.LOGIN, payload: email });

const getCurrencies = (currencies) => ({
  type: ACTIONS.GET_CURRENCIES,
  payload: currencies,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const CODE_CURRENCY_LENGTH = 3;
  const response = await fetch(BASE_URL);
  const data = await response.json();

  const currencies = Object.keys(data)
    .filter((code) => code.length === CODE_CURRENCY_LENGTH);

  dispatch(getCurrencies(currencies));
};
