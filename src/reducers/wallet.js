// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'USER_WALLET':
    return { ...state, currencies: action.value, expenses: action.value };
  default:
    return state;
  }
};

export default wallet;
