import { GET_CURRENCY } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
