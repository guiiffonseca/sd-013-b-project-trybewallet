// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case 'GET_DATA':
    return {
      ...state,
      currencies: action.payload,
    };

  case 'GET_EXPENSES':
    return {
      ...state,
      expenses: action.expenses,
    };

  default:
    return state;
  }
};

export default wallet;
