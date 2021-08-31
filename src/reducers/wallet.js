// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_INITIALS, REQUEST_API } from '../actions';

const INITTIAL_STATE = {
  isLoading: false,
  initial: [],
};

export default function wallet(state = INITTIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_INITIALS:
    return {
      ...state,
      initial: action.data,
    };
  default:
    return state;
  }
}
