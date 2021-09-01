import { userCoinsFetch, allData } from '../services/currenciesApi';

const USER_EMAIL = 'USER_EMAIL';
export const USER_COINS = 'USER_COINS';
export const USER_EXPENSES = 'USER_EXPENSES';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const userCoins = (payload) => ({
  type: USER_COINS,
  payload,
});

export const userExpenses = (payload) => ({
  type: USER_EXPENSES,
  payload,
});

export const fetchCoin = () => async (dispatch) => {
  const data = await userCoinsFetch();
  dispatch(userCoins(data));
};

export const fecthExchange = (payload) => async (dispatch, getState) => {
  const { expenses } = getState().wallet;
  const exchangeRates = await allData();
  dispatch(userExpenses({ ...payload, id: expenses.length, exchangeRates }));
};
