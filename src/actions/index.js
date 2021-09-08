// Coloque aqui suas actions
export const SAVE_LOGIN_NAME = 'SAVE_LOGIN_NAME';
export const FETCHING_CURRENCY = 'FETCHING_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const saveLoginName = (payload) => ({
  type: SAVE_LOGIN_NAME,
  payload,
});

export const fetchCurrency = (payload) => ({
  type: FETCHING_CURRENCY,
  payload });

const url = 'https://economia.awesomeapi.com.br/json/all';

export const requestCurrency = () => (dispatch) => fetch(url)
  .then((result) => result.json())
  .then((data) => dispatch(fetchCurrency(data)));

export const addExpenseSucceded = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addExpense = (state) => (dispatch) => fetch(url)
  .then((result) => result.json())
  .then((data) => {
    const obj = {
      ...state,
      exchangeRates: data,
    };
    dispatch(addExpenseSucceded(obj));
  });

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const editarExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});
