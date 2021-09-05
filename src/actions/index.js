// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';
export const SET_LOGGED = 'SET_LOGGED';
export const SET_MOEDAS = 'SET_MOEDAS';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setLogged = (payload) => ({
  type: SET_LOGGED,
  payload,
});

export const setMoedas = (payload) => ({
  type: SET_MOEDAS,
  payload,
});
