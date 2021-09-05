import currenciesAPI from '../services/currenciesAPI';

export const USER_INFO = 'USER_INFO';
export const COIN_INFO = 'COIN_INFO';
export const EXPENSES = 'EXPENSES';
export const ADD_TOTAL = 'ADD_TOTAL';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const setUserInfo = (payload) => ({
  type: USER_INFO, payload,
});
export const deleteItem = (payload) => ({ type: DELETE_ITEM, payload });
export const editItem = (payload) => ({ type: EDIT_ITEM, payload });
export const addTotal = (payload) => ({ type: ADD_TOTAL, payload });
export const setCoins = (payload) => ({ type: COIN_INFO, payload });
export const setWallet = (payload) => ({ type: EXPENSES, payload });
export const setExpenses = (payload) => async (dispatch) => {
  const rates = await currenciesAPI();
  payload.exchangeRates = rates;
  const conversionValue = payload.exchangeRates[payload.currency];
  const sum = payload.value * conversionValue.ask;
  // payload.convertedValue = parseFloat(sum.toFixed(2));
  dispatch(addTotal(sum));
  dispatch(setWallet(payload));
};

export const fetchCoins = () => async (dispatch) => {
  const response = await currenciesAPI();
  const array = Object.keys(response).filter((res) => res !== 'USDT');
  dispatch(setCoins(array));
};
