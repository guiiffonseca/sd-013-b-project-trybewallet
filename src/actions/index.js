// Coloque aqui suas actions
export const LOGIN = 'LOGIN_ACTION';

const setLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export default setLogin;
