export const GET_LOGIN_SUBMIT = 'GET_LOGIN_SUBMIT';
export const SET_EXPENSES_VALUE = 'SET_EXPENSES_VALUE';

export const getLoginSubmit = (payload) => (
  {
    type: GET_LOGIN_SUBMIT, payload,
  });

export const setExpensesValue = (payload) => (
  {
    type: SET_EXPENSES_VALUE, payload,
  });
