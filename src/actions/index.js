// Coloque aqui suas actions
export const LOGIN = 'LOGIN_ACTION';
export const WALLET_CURRENCY = 'WALLET_CURRENCY';
export const CREATE_EXPENCE = 'CREATE_EXPENCE';// ExpenSe é com S
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

const setLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const setCurrency = (payload) => ({
  type: WALLET_CURRENCY,
  payload,
});

export const listExpenses = (payload) => ({
  type: CREATE_EXPENCE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const getCurrencyThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const payload = await response.json();
  dispatch(setCurrency(payload));
};

export default setLogin;
