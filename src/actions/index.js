// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';
export const TEST = 'TEST';

export function setEmail(email) {
  return ({ type: SET_EMAIL, payload: email });
}
