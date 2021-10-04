export const ACTIONS = {
  GET_CURRENCIES: 'GET_CURRENCIES',
  GET_EXPENSES: 'GET_EXPENSES',
  DEL_EXPENSE: 'DEL_EXPENSE',
  EMAIL: 'EMAIL',
};

export const getEmail = (email) => ({
  type: ACTIONS.EMAIL, email });

export const getExpenses = (expenses) => ({
  type: ACTIONS.GET_EXPENSES, expenses,
});

export const getCurrencies = (currencies) => ({
  type: ACTIONS.GET_CURRENCIES, currencies,
});

export const delExpenses = (expenseToDel) => ({
  type: ACTIONS.DEL_EXPENSE, expenseToDel,
});
