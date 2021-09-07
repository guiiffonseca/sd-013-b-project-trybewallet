import { GET_CURRENCY, ADD_EXPANSE } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
