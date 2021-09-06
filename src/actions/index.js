// Coloque aqui suas actions
const BUTTON_LOGIN = 'BUTTON_LOGIN';

const buttonLogin = (email, password) => ({
  type: BUTTON_LOGIN,
  payload: {
    email,
    password,
  },
});

export { BUTTON_LOGIN, buttonLogin };
