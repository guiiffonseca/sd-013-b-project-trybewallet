import fetchAPI from '../services/fetchAPI';

export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';

export const setLoginEmail = (payload) => (
  {
    type: SET_LOGIN_EMAIL, payload,
  });

export const setLoginPassword = (payload) => (
  {
    type: SET_LOGIN_PASSWORD, payload,
  });

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_CURRENCIES = 'FAILED_CURRENCIES';

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

export const fetchCurrenciesThunk = () => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const response = await fetchAPI();
    const CURRENCY_SIZE = 3;
    const currencies = Object.keys(response).filter((currency) => (
      currency.length === CURRENCY_SIZE));
    dispatch(getCurrencies(currencies));
  } catch (error) {
    dispatch(failedCurrencies(error.message));
  }
};

export const REQUEST_EXCHANGE = 'REQUEST_EXCHANGE';
export const SET_EXPENSES = 'SET_EXPENSES';
export const FAILED_EXCHANGE = 'FAILED_EXCHANGE';

export const requestExchangeRates = () => (
  {
    type: REQUEST_EXCHANGE,
  });

export const setExpenses = (payload) => (
  {
    type: SET_EXPENSES, payload,
  });

export const failedExchangeRates = (error) => (
  {
    type: FAILED_EXCHANGE, payload: error,
  });

export const fetchExpensesThunk = (expenses) => async (dispatch) => {
  dispatch(requestExchangeRates());
  try {
    const exchangeRates = await fetchAPI();
    delete exchangeRates.USDT;
    delete exchangeRates.DOGE;
    expenses.exchangeRates = exchangeRates;
    dispatch(setExpenses(expenses));
  } catch (error) {
    dispatch(failedExchangeRates(error.message));
  }
};

// ---------------

// export const REQUEST_FETCH = 'REQUEST_FETCH';
// export const SET_CURRENCIES = 'SET_CURRENCIES';
// export const ERROR_FETCH = 'ERROR_FETCH';
// export const SET_EXPENSES = 'SET_EXPENSES';

// export const requestFetch = () => (
//   {
//     type: REQUEST_FETCH,
//   });

// export const errorFetch = (error) => (
//   {
//     type: ERROR_FETCH, payload: error,
//   });

// export const setCurrencies = (payload) => (
//   {
//     type: SET_CURRENCIES, payload,
//   });

// export const setExpenses = (error) => (
//   {
//     type: SET_EXPENSES, payload: error,
//   });

// export const fetchExpensesThunk = (expenses) => async (dispatch) => {
//   dispatch(requestFetch());
//   try {
//     const currencies = await fetchAPI();
//     delete currencies.USDT;
//     delete currencies.DOGE;
//     const currenciesList = Object.keys(currencies);
//     dispatch(setCurrencies(currenciesList));

//     const exchangeRates = await fetchAPI();
//     delete exchangeRates.USDT;
//     delete exchangeRates.DOGE;
//     expenses.exchangeRates = exchangeRates;
//     dispatch(setExpenses(expenses));
//     console.log(expenses);
//   } catch (error) {
//     dispatch(errorFetch(error.message));
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
