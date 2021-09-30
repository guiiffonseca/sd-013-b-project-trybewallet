export const SET_EMAIL = 'SET_EMAIL';
export const SET_EXPENSES = 'SET_EXPENSES';
export const SUM_EXPENSES = 'SUM_EXPENSES';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setExpenses = (payload) => ({
  type: SET_EXPENSES,
  payload,
});

export const sumExpenses = (payload) => ({
  type: SUM_EXPENSES,
  payload,
});

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});
