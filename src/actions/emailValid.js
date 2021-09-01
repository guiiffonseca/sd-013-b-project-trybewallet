/* Para disparar uma Action na aplicação, é necessário englobar o objeto dentro de
uma função Action Creator */

export const EMAIL_USER = 'EMAIL_USER';

export const emailValid = (payload) => ({
  type: EMAIL_USER,
  payload,
});
