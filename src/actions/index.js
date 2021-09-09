export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SET_EMAIL = 'SET_EMAIL';
export const WALLET = 'WALLET';

export const requestLogin = (payload) => (
  {
    type: REQUEST_LOGIN, payload,
  });

export const updatedWallet = (payload) => (
  {
    type: WALLET, payload,
  });
