// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_WALLET_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'value':
    return state;
  default:
    return state;
  }
};

export default wallet;
