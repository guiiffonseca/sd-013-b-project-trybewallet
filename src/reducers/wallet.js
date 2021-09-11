// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
const GET_CURRENCIES_FAIL = 'GET_CURRENCIES_FAIL';

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  const { expenses } = state;
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return ({ ...state, currencies: action.payload });
  case GET_CURRENCIES_FAIL:
    return ({ ...state, currencies: action.payload });
  case ADD_EXPENSE:
    return ({ ...state, expenses: [...expenses, action.payload] });
  case REMOVE_EXPENSE:
    return ({
      ...state,
      expenses: expenses.filter((expense) => expense.id !== Number(action.payload)) });
  default:
    return state;
  }
}

export default walletReducer;
