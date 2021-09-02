import getCurrencies from '../services/api';

export const SET_USER = 'SET_USER';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await getCurrencies();
  delete response.USDT;
  let currencies = Object.keys(response);
  currencies = currencies.map((currency) => ({ [currency]: currency }));
  dispatch(setCurrencies(currencies));
};
