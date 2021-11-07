import { COIN_SUCESS, ADD_EXPEND, DELETE_EXPENSES, EDITE_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  id: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case COIN_SUCESS:
    return ({ ...state, currencies: action.payload });
  case ADD_EXPEND:
    return ({
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        exchangeRates: state.currencies,
        id: state.id,
      }],
      id: state.id + 1,
    });

  case DELETE_EXPENSES:
    return ({
      ...state,
      expenses: state.expenses.filter((_, index) => index !== action.payload),
    });
  case EDITE_EXPENSES:
    return ({
      ...state,
      expenses: state.expenses.find((_, index) => index !== action.payload),
    });

  default:
    return state;
  }
}

export default wallet;
