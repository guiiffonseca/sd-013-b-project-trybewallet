// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const SET_EXPENSE = 'SET_EXPENSE';
const SET_CURRENCIES = 'SET_CURRENCIES';

const initialState = { currencies: [], expenses: [] };

const reducerWallet = (state = initialState, action) => {
  switch (action.type) {
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload),
    };
  default:
    return state;
  }
};

export default reducerWallet;
