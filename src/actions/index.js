export const SET_USERS = 'SET_USERS';
export const SET_COINS = 'SET_COINS';

export const storeUsers = (payload) => (
  {
    type: SET_USERS, payload,
  }
);

export const storeCoins = (payload) => (
  {
    type: SET_COINS, payload,
  }
);
