// Coloque aqui suas actions

export const LOADING = 'LOADING';
export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SAVE_COINS = 'SAVE_COINS';
export const LOGIN = 'LOGIN';

export const loading = () => ({
  type: LOADING,
});

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const saveCoins = (currency) => ({
  typeof: SAVE_COINS,
  payload: { currency },
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: { error },
});

const thunkAPI = (URL) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await fetch(URL);
    const moedas = await response.json();
    dispatch(saveCoins(moedas));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export default thunkAPI;
