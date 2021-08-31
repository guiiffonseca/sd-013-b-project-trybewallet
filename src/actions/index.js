// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const SET_EXPENSE = 'SET_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const FINISH_EDIT_EXPENSE = 'FINISH_EDIT_EXPENSE';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  currencies: currencies.filter((currency) => currency !== 'USDT'),
});

export const setExpense = (data, expense) => ({
  type: SET_EXPENSE,
  expense: {
    ...expense,
    exchangeRates: data,
  },
});

export const removeExpenseAction = (expense) => ({
  type: REMOVE_EXPENSE,
  expense,
});

export const editExpenseAction = (expense) => ({
  type: EDIT_EXPENSE,
  expense,
});

export const finishEditExpenseAction = (expense) => ({
  type: FINISH_EDIT_EXPENSE,
  expense,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(getCurrenciesSuccess(Object.keys(data)));
};

export const setExpenseThunk = (expense) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(setExpense(data, expense));
};
