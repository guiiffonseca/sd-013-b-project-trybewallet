const INITIAL_STATE = {
  expenses: [],
};

const ATT_CURRENCIES = 'ATT_CURRENCIES';
const SAVE_NEW_EXP = 'SAVE_NEW_EXP';
const DELETE_ROW = 'DELETE_ROW';
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ATT_CURRENCIES:
    return ({
      ...state,
      currencies: action.payload,
    });
  case SAVE_NEW_EXP:
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });
  case DELETE_ROW: {
    return ({
      ...state,
      expenses: action.payload,
    });
  }
  default:
    return state;
  }
};

export default wallet;
