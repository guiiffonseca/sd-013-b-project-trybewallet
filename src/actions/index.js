// Coloque aqui suas actions
export const VALIDA_EMAIL = 'VALIDA_EMAIL';

export const validaEmail = (email) => ({
  type: VALIDA_EMAIL,
  payload: email,
});
