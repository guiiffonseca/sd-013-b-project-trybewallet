// Coloque aqui suas actions
const SET_EMAIL = 'SET_EMAIL';
export default SET_EMAIL;

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});
