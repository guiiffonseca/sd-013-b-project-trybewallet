// Coloque aqui suas actions.
export const LOGIN = 'LOGIN';

export const actionLogin = (email) => ({
  type: LOGIN,
  email,
});

export const EXPENSE = 'EXPENSE';

export const actionExpense = (expense) => ({
  type: EXPENSE,
  expense,
});
