export const EMAIL_LOGIN = 'EMAIL_LOGIN';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

// ACTION CREATOR - LOGIN

export const emailLogin = (payload) => ({
  type: EMAIL_LOGIN,
  payload,
});

// ACTION CREATORS - API REQUEST COINS

export const requestAPISuccess = (json) => ({
  type: REQUEST_API_SUCCESS,
  payload: json,
});

export const requestAPIFailed = (error) => ({
  type: REQUEST_ERROR,
  error,
});

export function thunkCurrencies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => dispatch(requestAPISuccess(json)))
    .catch((error) => dispatch(requestAPIFailed(error)));
}
