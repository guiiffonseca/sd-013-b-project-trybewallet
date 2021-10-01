export const ACTIONS = {
  GET_TOKEN: 'GET_TOKEN',
  GET_CURRENCIES: 'GET_CURRENCIES',
  GET_EXPENSES: 'GET_EXPENSES',
  EMAIL: 'EMAIL',
};

export const getEmail = (email) => ({
  type: ACTIONS.EMAIL, email });

export const getExpenses = (expenses) => ({
  type: ACTIONS.GET_EXPENSES, expenses,
});

export const getScore = (currencies) => ({
  type: ACTIONS.GET_CURRENCIES, currencies,
});
