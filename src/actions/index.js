import { requisitionApi, ratesApi } from '../services/API';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_EXPENSES = 'SET_EXPENSES';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setUsername = (payload) => ({
  type: SET_USERNAME,
  payload,
});

export const setExpenses = (payload) => ({
  type: SET_EXPENSES,
  payload,
});

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const fetchCurrencieThunk = () => async (dispatch) => {
  const arrayCurrencies = await requisitionApi();
  dispatch(setCurrencies(arrayCurrencies));
};

export const exchangeRatesThunk = (payload) => async (dispatch) => {
  const exchangeRates = await ratesApi();
  dispatch(setExpenses({ ...payload, exchangeRates }));
};
