// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  FETCHING_CURRENCY,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_CURRENCY:
    return { ...state, currencies: action.payload };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.id, ...action.payload }],
      id: state.id + 1,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((item) => item.id !== parseInt(action.payload, 10)),
      ],
    };

  default:
    return state;
  }
}

export default wallet;
