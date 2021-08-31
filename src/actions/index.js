// Coloque aqui suas actions
export const VALIDA_EMAIL = 'VALIDA_EMAIL';

export const validEmail = ({ usuario: { user: { email } } }) => ({
  email,
});
