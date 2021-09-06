import { fetchCurrency } from '../services/Api';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const login = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const setCurrenciesThunk = () => async (dispatch) => {
  const currencies = await fetchCurrency();
  const payload = Object.keys(currencies);

  payload.splice(payload.indexOf('USDT'), 1);

  dispatch(setCurrencies(payload));
};

export const addExpenses = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addExpensesThunk = ({
  id,
  value,
  description,
  currency,
  method,
  tag,
  expenses }) => async (dispatch) => {
  const exchangeRates = await fetchCurrency();
  const newExpense = {
    id,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates };

  const payload = [...expenses, newExpense];
  dispatch(addExpenses(payload));
};
