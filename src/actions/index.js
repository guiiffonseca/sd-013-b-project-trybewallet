// Coloque aqui suas actions

export const LOADING = 'LOADING';
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SAVE_COINS = 'SAVE_COINS';

export const loading = () => ({
  type: LOADING,
});

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: { email },
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
