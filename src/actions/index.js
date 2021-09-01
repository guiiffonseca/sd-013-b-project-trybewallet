// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const PREPARE_EDIT_EXPENSE = 'PREPARE_EDIT_EXPENSE';
export const ADD_EXPENSES_TOTAL = 'ADD_EXPENSES_TOTAL';
export const SUB_EXPENSES_TOTAL = 'SUB_EXPENSES_TOTAL';

// user actions
export const login = (email) => ({
  type: LOGIN,
  payload: email,
});

// wallet actions
const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  payload: currencies,
});

const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

const deleteExpense = (expenseId) => ({
  type: DELETE_EXPENSE,
  payload: expenseId,
});

export const editExpense = (expenseToEdit) => ({
  type: EDIT_EXPENSE,
  payload: expenseToEdit,
});

export const prepareEditExpense = (expenseId) => ({
  type: PREPARE_EDIT_EXPENSE,
  payload: expenseId,
});

export const getCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;
  const currenciesArray = Object.values(currencies).map(({ code }) => code);

  dispatch(receiveCurrencies(currenciesArray));
};

export const createExpense = (data) => async (dispatch, getState) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;

  const { wallet: { expenses } } = getState();
  let expense = {};

  if (expenses.length) {
    expense = {
      id: expenses[expenses.length - 1].id + 1,
      ...data,
      exchangeRates: currencies,
    };
  } else {
    expense = {
      id: 0,
      ...data,
      exchangeRates: currencies,
    };
  }

  dispatch(addExpense(expense));
};

export const destroyExpense = (expenseId) => (dispatch) => {
  dispatch(deleteExpense(expenseId));
};
