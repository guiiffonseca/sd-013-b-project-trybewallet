export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const loginAction = (email, login) => ({
  type: LOGIN_SUCCESS,
  payload: {
    email,
    login,
  } });

export default loginAction;
