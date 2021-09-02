import { getAllCurrencies, getExchangeRates } from '../services/api';

const STORE_INFO_ACTIONS = {
  SET_EMAIL: 'SET_EMAIL',
  SET_EXPENSES: 'SET_EXPENSES',
  SET_CURRENCIES_CODE: 'SET_CURRENCIES_CODE',
};

export const setEmail = (payload) => ({
  type: STORE_INFO_ACTIONS.SET_EMAIL,
  payload,
});

export const setExpenses = (expense) => ({
  type: STORE_INFO_ACTIONS.SET_EXPENSES,
  payload: expense,
});

export const setCurrenciesCode = (payload) => ({
  type: STORE_INFO_ACTIONS.SET_CURRENCIES_CODE,
  payload,
});

export const setExpensesThunk = (expense) => async (dispatch) => {
  const exchangeRates = await getExchangeRates();

  dispatch(setExpenses({ ...expense, exchangeRates }));
};

export const setCurrenciesCodeThunk = () => async (dispatch) => {
  const response = await getAllCurrencies();

  dispatch(setCurrenciesCode(response));
};

export default STORE_INFO_ACTIONS;
