// Coloque aqui suas actions

export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addExpenses = (data, expense) => ({
  type: ADD_EXPENSES,
  expense: { ...expense, exchangeRates: data },
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const getCurrenciesFromApi = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  const currencies = Object.keys(data);
  dispatch(getCurrencies(currencies));
};

export const addExpensesThunk = (expense) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  dispatch(addExpenses(data, expense));
};
