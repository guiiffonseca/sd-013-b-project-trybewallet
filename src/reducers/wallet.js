// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case 'type':
    return {
      ...state,
      currency: action.currency,
      expenses: action.expenses,
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
