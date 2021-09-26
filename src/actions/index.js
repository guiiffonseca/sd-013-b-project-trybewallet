export const ADD_INFO = 'ADD_INFO';
// Coloque aqui suas actions
export const saveUserInfo = (email) => ({
  type: ADD_INFO,
  payload: {
    email,
  } });

export const saveWalletInfo = (currencies, expenses) => ({
  type: ADD_INFO,
  payload: {
    currencies,
    expenses,
  },
});
