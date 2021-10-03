// Coloque aqui suas actions
import axios from 'axios';
import fetchData from '../services/services';

export const LOGIN = 'LOGIN';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSE = 'SET_EXPENSE';
export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const updateEmail = (email) => ({ type: LOGIN, email });

export const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  payload: currencies,
});

export const removeExpense = (expenses, target) => {
  const filteredExpenses = expenses.filter((expense) => expense !== target);
  return ({
    type: REMOVE_EXPENSE,
    payload: filteredExpenses,
  });
};

export const fetchCurrencies = () => async (dispatch) => {
  const require = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await require.json();
  const dataList = Object.keys(data);
  const currencies = dataList.filter((currency) => currency !== 'USDT');
  dispatch(setCurrencies(currencies));
};

export const setExpense = (expense) => ({ type: SET_EXPENSE, payload: expense });
