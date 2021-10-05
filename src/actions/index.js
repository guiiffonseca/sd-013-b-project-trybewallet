export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

// Coloque aqui suas actions
export const saveUserInfo = (email) => ({
  type: ADD_EMAIL,
  payload: {
    email,
  } });

export const saveWalletInfo = (currencies, expenses) => ({
  type: ADD_EXPENSES,
  payload: {
    currencies,
    expenses,
  },
});

export const removeExpenses = (expenses) => ({
  type: REMOVE_EXPENSES,
  payload: {
    expenses,
  },
});
