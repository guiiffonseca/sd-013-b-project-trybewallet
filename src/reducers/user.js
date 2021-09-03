// Esse reducer será responsável por tratar as informações da pessoa usuária
import EMAIL_SUCESS from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL_SUCESS:
    return ({ ...state, email: action.email });
  default:
    return state;
  }
}

export default user;
