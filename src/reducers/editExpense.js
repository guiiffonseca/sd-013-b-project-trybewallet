// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ALL_ACTIONS } from '../actions';

const INITIAL_STATE = {
  shouldEdit: false,
  id: 0,
};

const editExpense = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ALL_ACTIONS.SET_EDIT_EXPENSE:
    return {
      ...state,
      shouldEdit: payload,
    };
  case ALL_ACTIONS.SET_ID_EDIT:
    return {
      ...state,
      id: payload,
    };
  default:
    return state;
  }
};

export default editExpense;
