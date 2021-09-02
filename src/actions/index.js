import requestAPI from '../services';
// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const TOTAL_EXPENSES = 'TOTAL_EXPENSES';

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

  dispatch(recieveCurrencies((currencies)));
};

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const totalExpenses = (payload) => ({
  type: TOTAL_EXPENSES,
  payload,
});
