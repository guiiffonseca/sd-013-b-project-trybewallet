import { SET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  expenses: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
