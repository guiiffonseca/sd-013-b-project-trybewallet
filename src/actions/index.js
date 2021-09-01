import currenciesAPI from '../services/currenciesAPI';

export const USER_INFO = 'USER_INFO';
export const COIN_INFO = 'COIN_INFO';
export const EXPENSES = 'EXPENSES';
export const TOTAL = 'TOTAL';

export const setUserInfo = (payload) => ({
  type: USER_INFO, payload,
});
export const setTotal = (payload) => ({ type: TOTAL, payload });
export const setCoins = (payload) => ({ type: COIN_INFO, payload });
export const setWallet = (payload) => ({ type: EXPENSES, payload });
export const setExpenses = (payload) => async (dispatch) => {
  const rates = await currenciesAPI();
  payload.exchangeRates = rates;
  const conversionValue = payload.exchangeRates[payload.currency];
  const total = payload.value * conversionValue.ask;
  dispatch(setTotal(total));
  dispatch(setWallet(payload));
};

export const fetchCoins = () => async (dispatch) => {
  const response = await currenciesAPI();
  const array = Object.keys(response).filter((res) => res !== 'USDT');
  dispatch(setCoins(array));
};
