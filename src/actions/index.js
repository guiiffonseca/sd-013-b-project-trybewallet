// Coloque aqui suas actions
/* export const addExpenses = (expenses) => ({ type: 'ADD_EXPENSES', expenses }); */

import expenses from '../Service/API';

const addEmail = (email) => ({ type: 'ADD_EMAIL', email });

export const addExpenses = () => ({
  type: 'ADD_EXPENSES',
});

export const addExpensesSuccess = (payload) => ({
  type: 'ADD_EXPENSES_SUCCESS',
  payload,
});

export const addExpensesError = (payload) => ({
  type: 'ADD_EXPENSES_ERROR',
  payload,
});

export const addExpensesThunk = (payload) => async (dispatch) => {
  dispatch(addExpenses());
  try {
    const results = await expenses(payload);
    const despesas = payload;
    despesas.exchangeRates = results;
    dispatch(addExpensesSuccess(despesas));
  } catch (error) {
    dispatch(addExpensesError(error));
  }
};

export default addEmail;
