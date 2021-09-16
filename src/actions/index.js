export const EMAIL_ACTION = 'EMAIL_ACTION';
export const REQUEST_API = 'REQUEST_MOVIES';
export const RECEIVE_API = 'RECEIVE_API_ACTION';

export const sendEmail = (state) => ({
  type: EMAIL_ACTION,
  state,
});

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const receiveAPI = (state) => ({
  type: RECEIVE_API,
  state,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((value) => dispatch(receiveAPI(value)));
  };
}
