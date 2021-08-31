import { SAVE_LOGIN, GET_COINS, GET_COINS_SUCCESS, GET_COINS_ERROR } from './actionsType';

export const actionSaveLogin = (login) => ({
  type: SAVE_LOGIN,
  login,
});

export const getCoins = () => ({
  type: GET_COINS,
});

export const getCoinsSuccess = (payload) => ({
  type: GET_COINS_SUCCESS,
  payload,
});

export const getCoinsError = (error) => ({
  type: GET_COINS_ERROR,
  error,
});

export const fetchApi = () => (dispatch) => {
  dispatch(getCoins());
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endPoint)
    .then((data) => data.json())
    .then((response) => dispatch(getCoinsSuccess(response)));
  // .catch((err) => dispatch(getCoinsError(err)));
};
