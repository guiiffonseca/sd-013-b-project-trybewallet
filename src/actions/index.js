export const LOGIN = 'LOGIN';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const getCurrencySuccessAction = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const currencyFetchAction = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(getCurrencySuccessAction(data));
};
