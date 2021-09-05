import { ADD_TOTAL, COIN_INFO, EXPENSES, DELETE_ITEM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case COIN_INFO:
    return { ...state, currencies: action.payload };
  case EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case ADD_TOTAL: {
    const tot = state.total + action.payload;
    return { ...state, total: parseFloat(tot.toFixed(2)) };
  }
  case DELETE_ITEM: {
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.payload.id),
    };
  }
  default:
    return state;
  }
};

export default wallet;
