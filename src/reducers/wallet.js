const INITIAL_STATE = {};

const ATT_CURRENCIES = 'ATT_CURRENCIES';
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ATT_CURRENCIES:
    return ({
      ...state,
      currencies: action.payload,
    });
  default:
    return state;
  }
};

export default wallet;
