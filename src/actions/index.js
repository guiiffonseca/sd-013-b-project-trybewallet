export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const UPDATE_WALLET = 'UPDATE_WALLET';

export const setLoginEmail = (payload) => (
  {
    type: SET_LOGIN_EMAIL, payload,
  });

export const setLoginPassword = (payload) => (
  {
    type: SET_LOGIN_PASSWORD, payload,
  });

export const updatedWallet = (payload) => (
  {
    type: UPDATE_WALLET, payload,
  });
