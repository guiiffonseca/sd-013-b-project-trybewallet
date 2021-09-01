// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const ESTADO_INICIAL_WALLET = {
  currencies: [],
  expenses: [],
};
function walletReducer(state = ESTADO_INICIAL_WALLET, action) {
  switch (action.type) {
  case 'CLICK_WALLET':

    return {
      ...state,
      // currencies: action.currencies,
      expenses: [...state.expenses, action.expenses],
    };

  default:
    return state;
  }
}

export default walletReducer;
