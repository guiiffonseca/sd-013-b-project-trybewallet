import { ADD_EXPENSE, CURRENCY_DATA, DELETE_ITEM } from '../actions';

const INITIAL_STATE = {
  id: 0,
  currenciesNames: [],
  exchangeRates: '',
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCY_DATA:
    return { ...state,
      currenciesNames: Object.keys(action.data)
        .filter((item) => item !== 'USDT'),
      exchangeRates: action.data };
  case ADD_EXPENSE:
    return { ...state,
      id: state.id + 1,
      expenses: [...state.expenses,
        { id: state.id,
          ...action.expense,
          exchangeRates: state.exchangeRates }] };
  case DELETE_ITEM:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense !== action.item) };
  default:
    return state;
  }
}

export default wallet;
