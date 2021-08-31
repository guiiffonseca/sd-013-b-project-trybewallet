// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.state,
      ],
    };
  case 'GET_CURRENCY':
    return {
      ...state,
      currencies: [...action.state],
    };
  default:
    return state;
  }
};
// lembrar do exchangeRates com valores dentro do action.state.
export default wallet;
