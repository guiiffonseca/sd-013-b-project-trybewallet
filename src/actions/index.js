import { fetchingCoin, fetchExchange } from '../services';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const WALLET_VALUE = 'WALLET_VALUE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';

export const loginSubmit = (payload) => (
  {
    type: LOGIN_SUBMIT, payload,
  }
);

export const walletValue = (payload) => (
  {
    type: WALLET_VALUE, payload,
  }
);

export const getCurrencies = (payload) => (
  {
    type: GET_CURRENCIES, payload,
  }
);

export const setExpenses = (payload) => (
  {
    type: SET_EXPENSES, payload,
  }
);

export const currenciesThunk = () => async (dispatch) => {
  const currenciesData = await fetchingCoin();
  dispatch(getCurrencies(currenciesData));
};

export const expensesThunk = (expense) => async (dispatch) => {
  const exchangeRates = await fetchExchange();
  dispatch(setExpenses({ ...expense, exchangeRates }));
};
