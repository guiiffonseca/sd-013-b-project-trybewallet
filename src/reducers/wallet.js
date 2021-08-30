import { EXPENSES } from '../actions';

const INNITIAL_STATE = {
  expenses: [],
};

export default function wallet(state = INNITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSES:
    return {
      ...state,
      expenses: [action.expense],
    };
  default:
    return state;
  }
}
