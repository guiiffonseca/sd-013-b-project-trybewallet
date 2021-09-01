// Coloque aqui suas action
export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';

export const actionUser = (payload) => ({
  type: USER_INFO,
  payload,
});

export const actionWallet = (payload) => ({
  type: WALLET_INFO,
  payload,
});
