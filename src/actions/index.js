// Coloque aqui suas actions
const LOGIN = 'LOGIN';
export default function Login(email) {
  return ({
    type: LOGIN,
    payload: {
      email,
    },
  });
}
