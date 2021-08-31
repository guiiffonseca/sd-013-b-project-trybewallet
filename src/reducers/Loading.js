import { LOADING } from '../actions';

const INITIAL_STATE = {
  isFatching: true,
};

function loading(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING:
    return { isFatching: !state.isFatching };
  default:
    return state;
  }
}

export default loading;
