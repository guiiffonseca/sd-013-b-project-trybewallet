// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';
export const SET_WALLET = 'SET_WALLET';

export const setEmail = (payload) => (
  {
    type: SET_EMAIL,
    payload,
  });

export const setWallet = (payload) => (
  {
    type: SET_WALLET,
    payload,
  });
// export const setPassword = () => (
//   {
//     type: SET_PASSWORD,
//   });
