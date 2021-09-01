import { fetchCurrenciesApi, fetchExchangeRateApi } from '../services';

const actions = {
  GET_EMAIL: 'GET_EMAIL',
  REQUEST_API: 'REQUEST_API',
  CURRENCIES: 'CURRENCIES',
  FAILED_REQUEST: 'FAILED_REQUEST',
  EXCHANGE_RATES: 'EXCHANGE_RATES',
};

export const requestApi = () => ({
  type: actions.REQUEST_API,
});

export const failedRequest = (error) => ({
  type: actions.FAILED_REQUEST, payload: error,
});

export const getCurrencies = (payload) => ({
  type: actions.CURRENCIES, payload,
});

export const getExchangeRates = (payload) => ({
  type: actions.EXCHANGE_RATES, payload,
});

export const getEmail = (payload) => ({
  type: actions.GET_EMAIL, payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestApi());

  try {
    const currencies = await fetchCurrenciesApi();
    dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
};

export const fetchExchangeRates = (payload) => async (dispatch) => {
  dispatch(requestApi());

  try {
    const exchangeRates = await fetchExchangeRateApi();
    dispatch(getExchangeRates({ ...payload, exchangeRates }));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
};

export default actions;
