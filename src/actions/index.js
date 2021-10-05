// Coloque aqui suas actions
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
export const UPDATE_USERS = 'UPDATE_USERS';

export const updateCurrency = (payload) => ({
  type: UPDATE_CURRENCY,
  payload,
});

export const updateUsers = (email) => ({
  type: UPDATE_USERS,
  payload: email,
});
