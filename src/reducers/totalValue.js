const TOTAL_VALUE_UPDATE = 'TOTAL_VALUE_UPDATE';

const INITIAL_STATE = {
  totalValue: 0,
};

function totalValueReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case TOTAL_VALUE_UPDATE:
    return { ...state, totalValue: payload };
  default:
    return state;
  }
}

export default totalValueReducer;
