import { UPDATE_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_WALLET:
    return { ...state, isFetching: true };
  // case WALLET_SUCCESS:
  //   return { ...state, wallet: action.payload, isFetching: false };
  // case WALLET_FAILED:
  //   return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default walletReducer;
