// Coloque aqui suas actions
const loginAction = (email) => ({
  type: 'LOGIN',
  payload: {
    email,
  },
});

export default loginAction;
