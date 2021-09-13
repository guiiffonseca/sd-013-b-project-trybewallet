import fetchCurrencies from '../services/API';

export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_CURRENCIES = 'FAILED_CURRENCIES';

export const setLoginEmail = (payload) => (
  {
    type: SET_LOGIN_EMAIL, payload,
  });

export const setLoginPassword = (payload) => (
  {
    type: SET_LOGIN_PASSWORD, payload,
  });

export const requestCurrencies = (payload) => (
  {
    type: REQUEST_CURRENCIES, payload,
  });

export const getCurrencies = (payload) => (
  {
    type: GET_CURRENCIES, payload,
  });

export const failedCurrencies = (error) => (
  {
    type: FAILED_CURRENCIES, payload: error,
  });

export const fetchCurrenciesThunk = () => async (dispatch) => {
  const response = await fetchCurrencies();
  const CURRENCY_SIZE = 3;
  const payload = Object.keys(response).filter((currency) => (
    currency.length === CURRENCY_SIZE));
  dispatch(getCurrencies(payload));
};

// export function testeCurrencies() {
//   return (dispatch) => {
//     dispatch(requestCurrencies());
//     return fetch('https://economia.awesomeapi.com.br/json/last/USD,CAD,EUR,GBP,ARS,BTC,LTC,JPY,CHF,AUD,CNY,ILS,ETH,XRP')
//       .then((response) => response.json()
//         .then(
//           (json) => dispatch(getCurrencies(json)),
//           (error) => dispatch(failedCurrencies(error)),
//         ));
//   };
// }

// export function fetchDog() {
//   return (dispatch) => {
//     dispatch(requestDog());
//     return fetch('https://dog.ceo/api/breeds/image/random')
//       .then((r) => r.json()
//         .then(
//           (json) => dispatch(getImage(json)),
//           (error) => dispatch(failedRequest(error)),
//         ));
//   };
// }

// function getImage(json) {
//   return { type: GET_IMAGE, payload: json.message };
// }
