const EXPENSES_SUCCESS = 'EXPENSES_SUCCESS';
const EXPENSES_FAIL = 'EXPENSES_FAIL';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case EXPENSES_SUCCESS:
    return { ...state, expenses: [...state.expenses, payload] };
  case EXPENSES_FAIL:
    return { ...state, expenses: payload };
  default:
    return state;
  }
}

export default walletReducer;
