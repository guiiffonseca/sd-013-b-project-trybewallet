export const LOGIN = 'LOGIN';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const login = (payload) => (
  {
    type: LOGIN, payload,
  });
export const addExpenses = (data, payload) => (
  {
    type: ADD_EXPENSES,
    payload: { ...payload, exchangeRates: data },
  });
export const getCurrencies = (payload) => (
  {
    type: GET_CURRENCIES, payload,
  });

export const removeExpense = (index) => ({ type: REMOVE_EXPENSE, payload: index });

export const fetchcurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  const currencies = Object.keys(data);
  dispatch(getCurrencies(currencies));
};
export const addExpensesThunk = (payload) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  dispatch(addExpenses(data, payload));
};
