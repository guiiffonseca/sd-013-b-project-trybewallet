// Coloque aqui suas actions
const SET_EMAIL = 'SET_EMAIL';
export default SET_EMAIL;

const SET_LOGED = 'SET_LOGED';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setLoged = () => ({
  type: SET_LOGED,
  payload: true,
});
