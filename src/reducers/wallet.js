import { USER_COINS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_COINS:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default walletReducer;
