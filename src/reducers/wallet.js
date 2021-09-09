import {
  CURRENCIES_REQUEST,
  CURRENCIES_REQUEST_SUCCESS,
  CURRENCIES_REQUEST_ERROR,
  ADD_EXPENSE,
  GET_EXCHANGE,
  GET_EXCHANGE_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  currencies: [],
  expenses: [],
  expensesTotal: 0,
};

function addTotal(state, action) {
  let total = 0;
  state.expenses.forEach((exp) => {
    total += parseFloat(exp.value) * parseFloat(exp.exchangeRates[exp.currency].ask)
      || 0;
  });
  total += parseFloat(action.payload.value) * parseFloat(action
    .payload.exchangeRates[action.payload.currency].ask);
  return total;
}

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES_REQUEST:
    return { ...state, isloading: true };
  case CURRENCIES_REQUEST_SUCCESS:
    return { ...state, isloading: false, currencies: action.currencies };
  case CURRENCIES_REQUEST_ERROR:
    return { ...state, isloading: false, error: action.error };
  case ADD_EXPENSE:
    return { ...state, expenses: state.expenses.concat(action.payload) };
  case GET_EXCHANGE:
    return { ...state, isloading: true };
  case GET_EXCHANGE_SUCCESS:
    return {
      ...state,
      isloading: false,
      expenses: [...state.expenses, action.payload],
      expensesTotal: addTotal(state, action),
    };
  default:
    return state;
  }
}
