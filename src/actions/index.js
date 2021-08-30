// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';
export const ADD_CURRENCIE = 'ADD_CURRENCIE';
export const ADD_EXPENSE = 'ADD_EXPENSES';
// export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const addCurrencie = (payload) => ({
  type: ADD_CURRENCIE,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});
