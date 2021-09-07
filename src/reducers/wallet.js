import { GET_CURRENCY, ADD_EXPANSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// const USER_EMAIL = 'USER_EMAIL';

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.array,
    };
  case ADD_EXPANSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: action.newArray,
    };
  default:
    return state;
  }
};

export default wallet;
