export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const setEmail = (value) => ({ type: SET_EMAIL, payload: value });
export const setPassword = (value) => ({ type: SET_PASSWORD, payload: value });

export const addExpense = (value) => ({ type: ADD_EXPENSE, payload: value });
