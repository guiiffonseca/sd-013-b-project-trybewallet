// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});
