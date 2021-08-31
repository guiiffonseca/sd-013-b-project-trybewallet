// Coloque aqui suas actions
export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
// export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';
export const GET_ALL_CURRENCIES = 'GET_ALL_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const setLoginValue = (payload) => ({
  type: SET_LOGIN_VALUE,
  payload,
});

// export const setWalletValue = (payload) => ({
//   type: SET_WALLET_VALUE,
//   payload,
// });

export const getAllCurrencies = (json) => ({
  type: GET_ALL_CURRENCIES,
  payload: json,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export function fetchCurrencyThunk() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(getAllCurrencies(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}
