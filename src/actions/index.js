import fetchApi from '../services/api';

export const SET_USERS = 'SET_USERS';
export const SET_COINS = 'SET_COINS';
export const SET_EXPENSES = 'SET_EXPENSES';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';
export const DELETE_ITEM = 'DELETE_ITEM';
export const RENDER_COINS = 'RENDER_COINS';

export const storeUsers = (payload) => (
  {
    type: SET_USERS, payload,
  }
);

export const renderCoins = (payload) => (
  {
    type: RENDER_COINS, payload,
  }
);

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  item,
});

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

export const getCurrencyThunk = (expenses) => async (dispatch) => {
  const response = await fetchApi();
  if (expenses !== undefined) {
    const payload = { ...expenses, exchangeRates: response };
    dispatch(setExpenses(payload));
  } else {
    dispatch(getCurrencySuccess(response));
  }
};
