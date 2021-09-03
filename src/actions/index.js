// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES';
export const SET_EXPENSE = 'SET_EXPENSE';

export function setEmail(email) {
  return ({ type: SET_EMAIL, payload: email });
}

export function setCurrencies(currencies) {
  return ({ type: SET_CURRENCIES, payload: currencies });
}

export function getCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    const currencies = Object.keys(result)
      .filter((currency) => currency !== 'USDT');
    dispatch({ type: SET_CURRENCIES, payload: currencies });
  };
}

export function getExchangeRates() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    dispatch({ type: SET_EXCHANGE_RATES, payload: result });
  };
}

export function setExpenses(expense) {
  return ({ type: SET_EXPENSE, payload: expense });
}
