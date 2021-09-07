import { COIN_SUCESS, ADD_EXPEND } from '../actions';

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
  default:
    return state;
  }
}

export default wallet;
