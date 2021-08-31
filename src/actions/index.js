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
