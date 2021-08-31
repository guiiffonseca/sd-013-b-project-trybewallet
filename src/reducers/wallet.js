// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// import actions from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
  error: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET':
    return {
      ...state,
      wallet: {
        currencies: action.currency,
        expenses: action.expenses,
      },
    };
  default:
    return state;
  }
};

export default walletReducer;
