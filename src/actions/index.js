import apiMoeda from '../services';
// Coloque aqui suas action
export const USER_INFO = 'USER_INFO';
export const REQUESTWALLET = 'REQUESTWALLET';
export const WALLET_INFO = 'WALLET_INFO';

export const actionUser = (payload) => ({
  type: USER_INFO,
  payload,
});

export const actionWallet = (payload) => ({
  type: WALLET_INFO,
  payload,
});

export const requestWallet = (payload) => ({
  type: REQUESTWALLET,
  payload,
});

export const requestThunk = () => (dispatch) => {
  try {
    apiMoeda().then((moeda) => {
      dispatch(requestWallet(moeda));
    });
  } catch (error) {
    console.log(error);
  }
};
