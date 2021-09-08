export const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO';

export const userUpdateLoginInfo = (payload) => ({
  type: UPDATE_LOGIN_INFO,
  payload,
});

export const SEND_EXPENSES_TO_STATE = 'SEND_EXPENSES_TO_STATE';

export const sendExpensesToState = (payload) => ({
  type: SEND_EXPENSES_TO_STATE,
  payload,
});
