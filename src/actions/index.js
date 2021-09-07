export const EMAIL_LOGIN = 'EMAIL_LOGIN';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const SET_EXPENSES = 'SET_EXPENSES';

// ACTION CREATOR - LOGIN

export const emailLogin = (payload) => ({
  type: EMAIL_LOGIN,
  payload,
});

// ACTION CREATORS - API REQUEST COINS

export const requestAPISuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

export const requestAPIFailed = (error) => ({
  type: REQUEST_ERROR,
  error,
});

export function thunkCurrencies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((payload) => dispatch(requestAPISuccess(payload)))
    .catch((error) => dispatch(requestAPIFailed(error)));
}

// ACTION CREATOR - EXPENSES

export const setExpenses = (payload) => ({
  type: SET_EXPENSES,
  payload,
});

export const setExpensesThunk = (payload) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const exchangeRates = await response.json();
  dispatch(setExpenses({ ...payload, exchangeRates }));
};
