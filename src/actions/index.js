// Coloque aqui suas actions
export const action = (state) => ({
  type: state.type,
  payload: state.payload,
});

export const myFetch = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((resp) => resp.json())
  .then((resp) => dispatch({
    type: 'GET_CURRENCY',
    payload: resp }))
  .catch((err) => dispatch({
    type: 'FAILED_REQUEST',
    payload: err }));
