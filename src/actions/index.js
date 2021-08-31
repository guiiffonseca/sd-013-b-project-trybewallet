// Coloque aqui suas actions
const USER_LOGIN = 'USER_LOGIN';
const USER_WALLET = 'USER_WALLET';

export const loginAction = (value) => ({ type: USER_LOGIN, value });

export const walletAction = (value) => ({ type: USER_WALLET, value });
