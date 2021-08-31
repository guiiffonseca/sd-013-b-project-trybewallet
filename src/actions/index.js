// Coloque aqui suas actions

export const USER_TYPE = 'user';
export const WALLET_TYPE = 'wallet';

export const userAction = (email) => ({
  type: USER_TYPE,
  payload: email,
});

export const walletAction = (currencies, expenses) => ({
  type: WALLET_TYPE,
  payload: { currencies, expenses },
});

export const walletActionThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;
  dispatch(walletAction(currencies));
};
