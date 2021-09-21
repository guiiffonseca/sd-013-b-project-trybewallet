// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  moedas: {},
  loading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_MOEDAS':
    return { ...state, moedas: action.payload };
  case 'SET_MOEDAS_FAIL':
    return { ...state, moedas: action.payload };
  case 'SET_LOADING_TRUE':
    return { ...state, loading: true };
  case 'SET_LOADING_FALSE':
    return { ...state, loading: false };
  case 'SET_MOEDAS_ARRAY':
    return { ...state, currencies: action.payload };
  case 'SET_EXPENSE':
    return { ...state, expenses: action.payload };
  case 'REMOVE_EXPENSE_INDEX ':
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
}

export default wallet;
