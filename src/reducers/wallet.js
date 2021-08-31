import { COIN_INFO } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case COIN_INFO:
    return { ...state, currencies: action.coins };
  default:
    return state;
  }
};

export default wallet;
