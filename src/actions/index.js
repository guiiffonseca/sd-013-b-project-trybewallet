// Coloque aqui suas actions

import fetchURL from '../services';

export const LOGIN = 'LOGIN';

export const login = (email, logged) => ({
  type: LOGIN,
  payload: {
    email,
    logged,
  },
});

export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: {
    currencies,
  },
});

export const ADD_EXPENSES = 'ADD_EXPENSES';

export const saveExpenses = (expenses) => async (dispatch) => {
  const response = await fetchURL();
  delete response.USDT;
  expenses.exchangeRates = response;
  dispatch({
    type: ADD_EXPENSES,
    payload: {
      expenses,
    },
  });
};

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetchURL();
  delete response.USDT;
  dispatch(getCurrencies(response));
};

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeItem = (index) => ({
  type: REMOVE_ITEM,
  payload: {
    index,
  },
});

export const EDIT_FORM = 'EDIT_FORM';

export const editForm = () => ({
  type: EDIT_FORM,
});

export const SET_ID_TO_EDIT = 'SET_ID_TO_EDIT';

export const setIdToEdit = (id) => ({
  type: SET_ID_TO_EDIT,
  payload: {
    id,
  },
});

export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const editExpense = (editExpenses) => ({
  type: EDIT_EXPENSE,
  payload: {
    editExpenses,
  },
});
