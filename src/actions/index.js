export const SET_USERNAME = 'SET_USERNAME';
export const SET_EXPENSES = 'SET_EXPENSES';

export const setUsername = (payload) => ({
  type: SET_USERNAME,
  payload,
});

export const serExpenses = (payload) => ({
  type: SET_EXPENSES,
  payload,
});
