import getCurrencies from '../services/api';

export const SET_USER = 'SET_USER';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const setExpenses = (payload) => ({
  type: SET_EXPENSES,
  payload,
});

export const setExpensesThunk = (payload) => async (dispatch) => {
  const exchangeRates = await getCurrencies();
  delete exchangeRates.USDT;
  dispatch(setExpenses({ ...payload, exchangeRates }));
};

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await getCurrencies();
  delete response.USDT;
  const currencies = Object.keys(response);
  dispatch(setCurrencies(currencies));
};

export const updateExpenses = (payload) => ({
  type: UPDATE_EXPENSES,
  payload,
});
