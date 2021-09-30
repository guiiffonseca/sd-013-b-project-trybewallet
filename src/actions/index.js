// Coloque aqui suas actions
const BUTTON_LOGIN = 'BUTTON_LOGIN';
const ADD_EXPENSES = 'ADD_EXPENSES';

const buttonLogin = (payload) => ({
  type: BUTTON_LOGIN,
  payload,
});

const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export { BUTTON_LOGIN, buttonLogin };
export { ADD_EXPENSES, addExpenses };
