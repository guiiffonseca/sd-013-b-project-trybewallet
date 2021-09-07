export const ACTIONS = {
  LOGIN: 'login',
  CURRENCIES: 'currencies',
};

export const setEmail = (email) => ({ type: ACTIONS.LOGIN, payload: email });

const getCurrencies = (currencies) => ({
  type: ACTIONS.CURRENCIES,
  payload: currencies,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const codeLength = 3;
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();

  const currencies = Object.keys(data).filter((code) => code.length === codeLength);

  dispatch(getCurrencies(currencies));
};
