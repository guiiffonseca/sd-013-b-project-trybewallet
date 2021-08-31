// Coloque aqui suas actions
export const BUTTON_LOGIN = 'BUTTON_LOGIN';
export default buttonLogin = (email, password) => ({
  type: BUTTON_LOGIN,
  payload: {
    email,
    password,
  },
});
