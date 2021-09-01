import { USER_INFO } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INICIAL_STATE = {
      email: '',
};

function user(state = INICIAL_STATE, action) {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export default user;
