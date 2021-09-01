// Coloque aqui suas actions

export const LOGIN = 'LOGIN';

export const actionLogin = (email) => ({
  type: LOGIN,
  email,
});

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const actionAddExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';

export const actionLoadCurrencies = (currencies) => ({
  type: LOAD_CURRENCIES,
  currencies,
});

export const actionLoadCurrenciesThunk = () => async (dispatch) => {
  const API = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(API);
  const data = await response.json();

  const currencies = Object.keys(data)
    .filter((currencie) => currencie !== 'USDT');

  dispatch(actionLoadCurrencies(currencies));
};
