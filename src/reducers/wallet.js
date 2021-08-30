// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const ESTADO_INICIAL_WALLET = {
  currencies: [],
  expesenses: [],
};
function walletReducer(state = ESTADO_INICIAL_WALLET, action) {
  switch (action.type) {
  case 'CLICK_WALLET':

    return {
      ...state,
      currencies: action.currencies,
      expesenses: action.expesenses,
    };

  default:
    return state;
  }
}

export default walletReducer;
