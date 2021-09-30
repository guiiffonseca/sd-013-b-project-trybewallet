export const SET_EMAIL = 'SET_EMAIL';
export const SET_EXPENSES = 'SET_EXPENSES';
export const SUM_EXPENSES = 'SUM_EXPENSES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setExpenses = (payload) => ({
  type: SET_EXPENSES,
  payload,
});

export const sumExpenses = (payload) => ({
  type: SUM_EXPENSES,
  payload,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

// const receiveCurrencies = (payload) => ({
//   type: GET_CURRENCIES,
//   payload,
// });

// export function getCurrencies() {
//   return (dispatch) => {
//     dispatch(requestCurrencies());
//     return fetch('https://economia.awesomeapi.com.br/json/all')
//       .then((response) => response.json())
//       .then((currencies) => dispatch(receiveCurrencies(currencies)));
//   };
// }

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});