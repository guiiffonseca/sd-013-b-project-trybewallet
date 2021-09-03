// Coloque aqui suas actions
const EMAIL_SUCESS = 'EMAIL_SUCESS';
export const COIN_SUCESS = 'COIN_SUCESS';

export const setEmailAction = (email) => ({
  type: EMAIL_SUCESS,
  email,
});

export const setCoins = (payload) => ({
  type: COIN_SUCESS,
  payload,
});

export const requestWalletCoinsThunk = () => async (dispatch) => {
  const data = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await data.json();
  dispatch(setCoins(result));
};

export default EMAIL_SUCESS;
