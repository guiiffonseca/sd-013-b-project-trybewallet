// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  payload: currencies,
});

export const currenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  delete data.DOGE;
  const currencies = Object.keys(data);

  dispatch(setCurrencies(currencies));
};
