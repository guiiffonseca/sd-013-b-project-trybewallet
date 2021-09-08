export const SET_EMAIL = 'SET_EMAIL';
export const SET_EXPENSES = 'SET_EXPENSES';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setExpenses = (payload) => ({
  type: SET_EXPENSES,
  payload,
});
