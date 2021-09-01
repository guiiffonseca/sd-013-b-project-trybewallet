export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const APPLY_EDDIT = 'APPLY_EDIT';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export const loginAction = (email) => ({
  type: LOGIN, email,
});

export const addExpense = (expense, exchangeRates) => ({
  type: ADD_EXPENSE, expense, exchangeRates,
});

export const deleteExpense = (expenseId) => ({
  type: DELETE_EXPENSE, expenseId,
});

export const editExpense = (expenseId) => ({
  type: EDIT_EXPENSE, expenseId,
});

export const applyEddit = (object) => ({
  type: APPLY_EDDIT, object,
});

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES, currencies,
});

export const fetchExpense = (expense) => async (dispatch) => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  delete data.USDT;
  dispatch(addExpense(expense, data));
};
