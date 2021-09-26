import { ADD_INFO } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function saveWalletInfo(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_INFO:
    return { ...state,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses };
  default:
    return state;
  }
}

export default saveWalletInfo;
