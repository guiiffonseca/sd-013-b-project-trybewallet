import STORE_INFO_ACTIONS from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case STORE_INFO_ACTIONS.SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case STORE_INFO_ACTIONS.SET_CURRENCIES_CODE:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default walletReducer;
