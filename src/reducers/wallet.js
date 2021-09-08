import { SEND_EXPENSES_TO_STATE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_EXPENSES_TO_STATE:
    return {
      ...state,
      expenses: [{
        ...action.payload,
      },
      ],
    };
  default:
    return state;
  }
}

export default walletReducer;
