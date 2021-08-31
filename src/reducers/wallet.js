// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES_SUCCESS, SET_EXPENSE } from '../actions';

const initialState = ({
  currencies: [],
  expenses: [],
});

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return ({
      ...state,
      currencies: action.currencies,
    });
  case SET_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, action.expense],
    });
  default:
    return state;
  }
};

export default wallet;
