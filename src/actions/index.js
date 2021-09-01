// Coloque aqui suas actions
const SET_EMAIL = 'SET_EMAIL';
export default SET_EMAIL;

export const SET_LOGGED = 'SET_LOGGED';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setLogged = (payload) => ({
  type: SET_LOGGED,
  payload,
});
