// Coloque aqui suas actions
export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';

export const setLoginValue = (payload) => ({
  type: SET_LOGIN_VALUE,
  payload,
});

export const setWalletValue = (payload) => ({
  type: SET_WALLET_VALUE,
  payload,
});
