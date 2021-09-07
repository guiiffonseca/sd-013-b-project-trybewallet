const SET_EMAIL = 'SET_EMAIL';
const SET_EXPENSES = 'SET_EXPENSES';
const SET_CURRENCIES = 'SET_CURRENCIES';

export const ALL_ACTIONS = {
  SET_EMAIL,
  SET_EXPENSES,
  SET_CURRENCIES,
};

export const setEmail = (payload) => ({
  type: ALL_ACTIONS.SET_EMAIL,
  payload,
});

export const setExpenses = (payload) => ({
  type: ALL_ACTIONS.SET_EXPENSES,
  payload,
});

export const setCurrencies = (payload) => ({
  type: ALL_ACTIONS.SET_CURRENCIES,
  payload,
});
