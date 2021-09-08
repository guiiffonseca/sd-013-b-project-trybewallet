const SET_EMAIL = 'SET_EMAIL';
const EXPENSES_SUCCESS = 'EXPENSES_SUCCESS';
const EXPENSES_FAIL = 'EXPENSES_FAIL';
const SET_EXPENSES_LIST = 'SET_EXPENSES_LIST';
const TOTAL_VALUE_UPDATE = 'TOTAL_VALUE_UPDATE';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const fetchExpensesSuccess = (payload) => ({
  type: EXPENSES_SUCCESS,
  payload,
});

export const fetchExpensesFail = (payload) => ({
  type: EXPENSES_FAIL,
  payload,
});

export const fetchExpensesThunk = (expenseState) => async (dispatch) => {
  try {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await fetchApi.json();
    const expense = {
      ...expenseState,
      exchangeRates: result,
    };
    return dispatch(fetchExpensesSuccess(expense));
  } catch (error) {
    return dispatch(fetchExpensesFail(error));
  }
};

export const setExpensesList = (payload) => ({
  type: SET_EXPENSES_LIST,
  payload,
});

export const totalValueAction = (payload) => ({
  type: TOTAL_VALUE_UPDATE,
  payload,
});
