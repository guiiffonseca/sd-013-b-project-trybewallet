import fetchApi from '../services/api';

export const SET_USERS = 'SET_USERS';
export const SET_COINS = 'SET_COINS';
export const SET_EXPENSES = 'SET_EXPENSES';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export const storeUsers = (payload) => (
  {
    type: SET_USERS, payload,
  }
);

export const storeCoins = (payload) => (
  {
    type: SET_COINS, payload,
  }
);

export const setExpenses = (payload) => (
  {
    type: SET_EXPENSES,
    payload,
  }
);

export const getCurrency = () => ({
  type: GET_CURRENCY,
});

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: GET_CURRENCY_ERROR,
  payload,
});

export const getCurrencyThunk = () => async (dispatch) => {
  dispatch(getCurrency());
  try {
    const response = await fetchApi();
    dispatch(getCurrencySuccess(response));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};
