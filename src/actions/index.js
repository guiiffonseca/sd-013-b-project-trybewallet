// Coloque aqui suas actions

// Action Login

export const LOGIN = 'LOGIN';

export const login = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});
