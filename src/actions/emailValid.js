/* Para disparar uma Action na aplicação, é necessário englobar o objeto dentro de
uma função Action Creator */

const EMAIL_USER = 'EMAIL_USER';

const emailValid = (payload) => ({
  type: EMAIL_USER,
  payload,
});

export default emailValid;
