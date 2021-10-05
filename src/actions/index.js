// Coloque aqui suas actions
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
export const UPDATE_USERS = 'UPDATE_USERS';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const ADD_EXPENSES = 'ADD EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const updateCurrency = (payload) => ({
  type: UPDATE_CURRENCY,
  payload,
});

export const updateUsers = (state) => ({
  type: UPDATE_USERS,
  payload: state,
});

export const updatePassword = (state) => ({
  type: UPDATE_PASSWORD,
  payload: state,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const addExpenses = (state) => ({
  type: ADD_EXPENSES,
  payload: state,
});

export const deleteExpense = (state) => ({
  type: DELETE_EXPENSE,
  state,
});
