// Coloque aqui suas actions
const LOGIN = 'LOGIN';
const GET_CURRENCIES = 'GET_CURRENCIES';
export default function Login(email) {
  return ({
    type: LOGIN,
    payload: {
      email,
    },
  });
}

export function fetchCurencies(data) {
  return ({
    type: GET_CURRENCIES,
    payload: {
      moedas: data,
    },
  });
}
