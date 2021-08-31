// lembrar de importar as actions type para cada reducer
import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const setEmail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { email: action.payload };
  default:
    return state;
  }
};
export default setEmail;
