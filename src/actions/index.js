import userCoinsFetch from '../services/currenciesApi';

const USER_EMAIL = 'USER_EMAIL';
export const USER_COINS = 'USER_COINS';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const userCoins = (payload) => ({
  type: USER_COINS,
  payload,
});

export const fetchCoin = () => async (dispatch) => {
  const data = await userCoinsFetch();
  dispatch(userCoins(data));
};
