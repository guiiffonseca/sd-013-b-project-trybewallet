import getCodeCountries from '../API';

// Coloque aqui suas actions

// Action Login

export const LOGIN = 'LOGIN';

export const login = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

// Action addExpenses

export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: {
    expenses,
  },
});

// thunk para requisição da API e disparar a action ADD_EXPENSES
export const saveExpensesThunk = (expenses) => async (dispatch) => {
  const results = await getCodeCountries();
  delete results.USDT;
  dispatch(addExpenses(expenses));
};
