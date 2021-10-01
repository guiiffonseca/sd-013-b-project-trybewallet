import fetchAPI from '../services/fetchAPI';

export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_CURRENCIES = 'FAILED_CURRENCIES';
export const REQUEST_EXCHANGE = 'REQUEST_EXCHANGE';
export const GET_EXCHANGE = 'GET_EXCHANGE';
export const FAILED_EXCHANGE = 'FAILED_EXCHANGE';
export const SET_EXPENSES = 'SET_EXPENSES';

export const setLoginEmail = (payload) => (
  {
    type: SET_LOGIN_EMAIL, payload,
  });

export const setLoginPassword = (payload) => (
  {
    type: SET_LOGIN_PASSWORD, payload,
  });

export const requestCurrencies = () => (
  {
    type: REQUEST_CURRENCIES,
  });

export const getCurrencies = (payload) => (
  {
    type: GET_CURRENCIES, payload,
  });

export const failedCurrencies = (error) => (
  {
    type: FAILED_CURRENCIES, payload: error,
  });

export const requestExchangeRates = () => (
  {
    type: REQUEST_EXCHANGE,
  });

export const getExchangeRates = (payload) => (
  {
    type: GET_EXCHANGE, payload,
  });

export const failedExchangeRates = (error) => (
  {
    type: FAILED_EXCHANGE, payload: error,
  });

export const fetchCurrenciesThunk = () => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const response = await fetchAPI();
    const CURRENCY_SIZE = 3;
    const currencies = Object.keys(response).filter((currency) => (
      currency.length === CURRENCY_SIZE));
    dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(failedCurrencies(error));
  }
};

export const fetchExchangeRatesThunk = () => async (dispatch) => {
  dispatch(requestExchangeRates());
  try {
    const exchangeRates = await fetchAPI();
    dispatch(getExchangeRates(exchangeRates));
  } catch (error) {
    dispatch(failedExchangeRates(error));
  }
};

export const setExpenses = (payload) => (
  {
    type: SET_EXPENSES, payload,
  });

// export const SET_CONTROLS = 'SET_CONTROLS';

// export const setControls = (payload) => (
//   {
//     type: SET_CONTROLS, payload,
//   });

// export const REQUEST_CURRENCIES_SEL = 'REQUEST_CURRENCIES_SEL';
// export const GET_CURRENCIES_SEL = 'GET_CURRENCIES_SEL';
// export const FAILED_CURRENCIES_SEL = 'FAILED_CURRENCIES_SEL';

// export const requestSelectedCurrencies = (payload) => (
//   {
//     type: REQUEST_CURRENCIES_SEL, payload,
//   });

// export const getSelectedCurrencies = (payload) => (
//   {
//     type: GET_CURRENCIES_SEL, payload,
//   });

// export const failedSelectedCurrencies = (error) => (
//   {
//     type: FAILED_CURRENCIES_SEL, payload: error,
//   });

// export const fetchCurrenciesSelectedThunk = () => async (dispatch) => {
//   dispatch(requestSelectedCurrencies());
//   try {
//     const response = await fetchCurrencies();
//     console.log(response);
//     const CURRENCY_SIZE = 3;
//     const payload = Object.keys(response).filter((currency) => (
//       currency.length === CURRENCY_SIZE));
//     dispatch(getSelectedCurrencies(payload));
//   } catch (error) {
//     dispatch(failedSelectedCurrencies(error));
//   }
// };

// export const getISSLocationThunk = () => async (dispatch) => {
//   // action loading
//   try {
//     const response = await getCurrentISSLocation();
//     const payload = {
//       latitude: Number(response.iss_position.latitude),
//       longitude: Number(response.iss_position.longitude),
//     };
//     dispatch(getISSLocationSuccess(payload));
//   } catch (error) {
//     dispatch(getISSLocationError(error));
//   }
// };

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
