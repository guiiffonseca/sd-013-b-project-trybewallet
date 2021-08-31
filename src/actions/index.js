const LOGIN = 'LOGIN';

const loginSubmit = (payload) => ({
  type: LOGIN,
  payload,
});

export default loginSubmit;
