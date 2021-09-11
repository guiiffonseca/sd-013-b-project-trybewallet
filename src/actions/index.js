export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const UPDATE_WALLET = 'UPDATE_WALLET';

export const setLoginValue = (payload) => (
  {
    type: SET_LOGIN_EMAIL, payload,
  });

export const updatedWallet = (payload) => (
  {
    type: UPDATE_WALLET, payload,
  });
