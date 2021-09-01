// Coloque aqui suas actions
/*  export const getCoin = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
  }
  dispatch()
}  */

export const LOGIN = 'LOGIN';
export const GET_INPUT_PASSWORD = 'GET_INPUT_PASSWORD';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const getInputPassword = (payload) => ({
  type: GET_INPUT_PASSWORD,
  payload,
});
