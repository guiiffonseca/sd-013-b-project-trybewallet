// Esse reducer será responsável por tratar as informações
//  da pessoa usuária //importar userenail
import { USER_EMAIL } from '../actions/index';

const USER_INITIAL_STATE = {
  email: '',
};

const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return { ...state, email: action.state };
  default:
    return state;
  }
};

export default user;
