import fetchAPI from '../services/fetchAPI';

export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';

export const setLoginEmail = (payload) => (
  {
    type: SET_LOGIN_EMAIL, payload,
  });

export const setLoginPassword = (payload) => (
  {
    type: SET_LOGIN_PASSWORD, payload,
  });

export const REQUEST_FETCH = 'REQUEST_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';

export const requestFetch = () => (
  {
    type: REQUEST_FETCH,
  });

export const failedFetch = (error) => (
  {
    type: FAILED_FETCH, payload: error,
  });

export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getCurrencies = (payload) => (
  {
    type: GET_CURRENCIES, payload,
  });

export const fetchCurrenciesThunk = () => async (dispatch) => {
  dispatch(requestFetch());
  try {
    const response = await fetchAPI();
    const CURRENCY_SIZE = 3;
    const currencies = Object.keys(response).filter((currency) => (
      currency.length === CURRENCY_SIZE));
    dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(failedFetch(error.message));
  }
};

export const SET_EXPENSES = 'SET_EXPENSES';

export const setExpenses = (payload) => (
  {
    type: SET_EXPENSES, payload,
  });

export const fetchExpensesThunk = (expenses) => async (dispatch) => {
  dispatch(requestFetch());
  try {
    const exchangeRates = await fetchAPI();
    delete exchangeRates.USDT;
    delete exchangeRates.DOGE;
    expenses.exchangeRates = exchangeRates;
    dispatch(setExpenses(expenses));
  } catch (error) {
    dispatch(failedFetch(error.message));
  }
};

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const deleteExpense = (payload) => (
  {
    type: DELETE_EXPENSE, payload,
  });

export const editExpense = (payload) => (
  {
    type: EDIT_EXPENSE, payload,
  });

export const updateExpense = (payload) => (
  {
    type: UPDATE_EXPENSE, payload,
  });
