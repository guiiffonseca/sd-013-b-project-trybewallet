// Coloque aqui suas actions
export const EMAIL_LOGIN = 'EMAIL_LOGIN';
// export const REQUEST_API = 'REQUEST_API';

export const emailLogin = (payload) => ({
  type: EMAIL_LOGIN,
  payload,
});

// export const requestAPI = () => ({ type: REQUEST_API });

// export function thunkFetchAPI() {
//   return async (dispatch) => {
//     try {
//       dispatch(requestAPI());
//       const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//       const data = await response.json();
//       dispatch(getPicture(data));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }
