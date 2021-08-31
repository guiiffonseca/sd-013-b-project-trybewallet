// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

export const DEFAULT_WALLET_STATE = { currencies: [], expenses: [] };

function walletData(state = DEFAULT_WALLET_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default walletData;
