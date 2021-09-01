// Coloque aqui suas actions
export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';

export const GET_ALL_CURRENCIES = 'GET_ALL_CURRENCIES';
export const GET_UNIQUE_CURRENCY = 'GET_UNIQUE_CURRENCY';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_UNIQUE_CURRENCY = 'REQUEST_UNIQUE_CURRENCY';

export const FAILED_REQUEST = 'FAILED_REQUEST';

export const setLoginValue = (payload) => ({
  type: SET_LOGIN_VALUE,
  payload,
});

export const setWalletValue = (payload) => ({
  type: SET_WALLET_VALUE,
  payload,
});

export const getAllCurrencies = (payload) => ({
  type: GET_ALL_CURRENCIES,
  payload,
});

// export const getUniqueCurrency = (json) => ({
//   type: GET_UNIQUE_CURRENCY,
//   payload: json,
// });

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

// export const requestUniqueCurrency = () => ({
//   type: REQUEST_UNIQUE_CURRENCY,
// });

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export function fetchCurrencyThunk() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => {
        const currencies = Object.keys(json)
          .filter((currency) => currency !== 'USDT');
        dispatch(getAllCurrencies(currencies));
      })
      .catch((error) => dispatch(failedRequest(error)));
  };
}

export function fetchGetCurrenciesThunk(payload) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();
    dispatch(setWalletValue({ ...payload, exchangeRates }));
    // console.log(exchangeRates);
  };
}
