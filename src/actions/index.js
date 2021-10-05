import Api from '../Api';

export const LOGIN = 'LOGIN';
export const updateEmail = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

export const ADD_EXPENSES = 'ADD_EXPENSES';
export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: {
    expenses,
  },
});

export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const deleteExpenses = (id) => ({
  type: DELETE_EXPENSES,
  payload: {
    id,
  },
});

export const saveExpensesThunk = (expenses) => async (dispatch) => {
  const results = await Api();
  delete results.USDT;
  dispatch(addExpenses(expenses));
};
