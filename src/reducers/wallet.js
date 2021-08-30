import { SET_EXPENSES_VALUE } from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SET_EXPENSES_VALUE:
    return { wallet: action.payload };
  default:
    return state;
  }
};

export default wallet;
