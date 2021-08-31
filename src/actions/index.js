export const LOGIN = 'LOGIN';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EDITED_EXPENSE = 'SAVE_EDITED_EXPENSE';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const getCurrencySuccessAction = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const currencyFetchAction = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  dispatch(getCurrencySuccessAction(data));
};

export const saveExpenseAction = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

export const removeExpenseAction = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const editExpenseAction = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const saveEditedExpenseAction = () => ({
  type: SAVE_EDITED_EXPENSE,
});
