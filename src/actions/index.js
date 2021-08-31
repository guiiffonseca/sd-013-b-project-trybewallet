// Coloque aqui suas actions
const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

export const ACTIONS = {
  LOGIN: 'LOGIN',
  GET_CURRENCIES: 'GET_CURRENCIES',
  ADD_EXPENSE: 'ADD_EXPENSE',
};

export const setEmail = (email) => ({ type: ACTIONS.LOGIN, payload: email });

const getCurrencies = (currencies) => ({
  type: ACTIONS.GET_CURRENCIES,
  payload: currencies,
});

const addExpense = (expense) => ({
  type: ACTIONS.ADD_EXPENSE,
  payload: expense,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const CODE_CURRENCY_LENGTH = 3;
  const response = await fetch(BASE_URL);
  const data = await response.json();

  const currencies = Object.keys(data)
    .filter((code) => code.length === CODE_CURRENCY_LENGTH);

  dispatch(getCurrencies(currencies));
};

export const addExpenseThunk = (expense) => async (dispatch) => {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  expense.exchangeRates = data;

  dispatch(addExpense(expense));
};
