import { RECEIVE_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const updateEmail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_API:
    return {
      ...state,
      currencies: action.state,
    };
  default:
    return state;
  }
};

export default updateEmail;
