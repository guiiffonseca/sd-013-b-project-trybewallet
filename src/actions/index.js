// Coloque aqui suas actions
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const GET_INITIALS = 'GET_INITIALS';
export const REQUEST_API = 'REQUEST_API';

export const submitLogin = (email) => ({
  type: SUBMIT_LOGIN,
  email,
});

export const requestApi = () => ({ type: REQUEST_API });

export const getInitial = (data) => ({
  type: GET_INITIALS,
  data,
});

export function fetchApi() {
  return async (dispatch) => {
    dispatch(requestApi());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(getInitial(data));
    } catch (error) {
      console.log(error);
    }
  };
}
