// Coloque aqui suas actions
const BUTTON_LOGIN = 'BUTTON_LOGIN';
const ADD_EXPENSES = 'ADD_EXPENSES';
const REMOVE_VALOR = 'REMOVE_VALOR';

const buttonLogin = (payload) => ({
  type: BUTTON_LOGIN,
  payload,
});

const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

const removeValor = (payload) => ({
  type: REMOVE_VALOR,
  payload,
});

export { BUTTON_LOGIN, buttonLogin };
export { ADD_EXPENSES, addExpenses };
export { REMOVE_VALOR, removeValor };
