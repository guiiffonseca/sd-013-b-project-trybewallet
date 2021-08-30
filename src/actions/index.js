// Coloque aqui suas actions

const actionLogin = (email) => ({
  type: 'LOGIN',
  payload: {
    email,
  },
});

export default actionLogin;
