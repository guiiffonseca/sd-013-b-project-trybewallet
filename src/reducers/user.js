import { VALIDA_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALIDA_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};
export default user;
