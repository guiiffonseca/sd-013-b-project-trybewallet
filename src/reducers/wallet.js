const INITIAL_STATE = {
  moeda: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'responseCurrency':
    return {
      ...state,
      moeda: action.state,
    };
  default:
    return state;
  }
}

export default wallet;
