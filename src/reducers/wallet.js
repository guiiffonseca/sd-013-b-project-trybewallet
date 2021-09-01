// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES } from '../actions';

const initialState = ({
  currencies: [],
  expenses: [],
});

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return ({
      ...state,
      currencies: action.currencies,
    });
  default:
    return state;
  }
};

export default wallet;
