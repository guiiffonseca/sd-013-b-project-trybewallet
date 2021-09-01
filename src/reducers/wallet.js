// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { VALIDA_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case VALIDA_EMAIL:
  //   return { ...state, user: { email: action.payload } };
  default:
    return state;
  }
};

export default wallet;
