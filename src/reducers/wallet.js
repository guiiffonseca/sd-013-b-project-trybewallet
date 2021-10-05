import { ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function saveWalletInfo(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, action.payload.expenses],
      currencies: action.payload.currencies };
  default:
    return state;
  }
}

export default saveWalletInfo;
