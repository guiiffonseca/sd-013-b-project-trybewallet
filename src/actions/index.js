import { fetchCurrencies, fetchExchanges } from '../utils';

// action types
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SET_EXPENSES = 'SET_EXPENSES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const GET_EXCHANGES = 'GET_EXCHANGES';
export const GET_EXCHANGES_SUCCESS = 'GET_EXCHANGES_SUCCESS';
export const GET_EXCHANGES_ERROR = 'GET_EXCHANGES_ERROR';
export const GET_AMOUNT = 'GET_AMOUNT';

// action creators
export const saveEmailAction = (payload) => ({ type: SAVE_EMAIL, payload });

export const setExpensesAction = (payload) => ({ type: SET_EXPENSES, payload });

export const getAmount = (payload) => ({
  type: GET_AMOUNT,
  payload,
});

// Essa action é para mudar o estado do isLoading para true, ou seja, está sendo feita a requisição a api
export const getCurrenciesAction = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccessAction = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesErrorAction = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export const getExchangesAction = () => ({
  type: GET_EXCHANGES,
});

export const getExchangesSuccessAction = (payload) => ({
  type: GET_EXCHANGES_SUCCESS,
  payload,
});

export const getExchangesErrorAction = (payload) => ({
  type: GET_EXCHANGES_ERROR,
  payload,
});

export const fetchCurrenciesThunk = () => async (dispatch) => {
  dispatch(getCurrenciesAction());
  try {
    const response = await fetchCurrencies();
    const exchanges = await fetchExchanges();
    dispatch(getExchangesSuccessAction(exchanges));
    dispatch(getCurrenciesSuccessAction(response));
  } catch (error) {
    dispatch(getCurrenciesErrorAction(error));
  }
};

export const fetchExchangesThunk = () => async (dispatch) => {
  dispatch(getExchangesAction());
  try {
    const response = await fetchExchanges();
    dispatch(getExchangesSuccessAction(response));
  } catch (error) {
    dispatch(getExchangesErrorAction(error));
  }
};
