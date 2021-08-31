import currenciesAPI from '../services/currenciesAPI';

export const USER_INFO = 'USER_INFO';
export const COIN_INFO = 'COIN_INFO';

export const setUserInfo = (payload) => ({
  type: USER_INFO, payload,
});
export const setCoins = (coins) => ({ type: COIN_INFO, coins });

export const fetchCoins = () => async (dispatch) => {
  const response = await currenciesAPI();
  const array = Object.keys(response).filter((res) => res !== 'USDT');
  dispatch(setCoins(array));
};
