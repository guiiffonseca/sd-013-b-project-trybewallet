// Coloque aqui suas actions

export const USER_TYPE = 'user';
export const WALLET_TYPE = 'user';

export const userAction = (email) => ({
  type: USER_TYPE,
  payload: email,
});

export const walletAction = (currencies, expenses) => ({
  type: WALLET_TYPE,
  payload: { currencies, expenses },
});
