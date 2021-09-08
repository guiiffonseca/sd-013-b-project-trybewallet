export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: expense,
});

const loginAction = (email, login) => ({
  type: LOGIN_SUCCESS,
  payload: {
    email,
    login,
  },
});

export default loginAction;
