// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import actions from '../actions';

const INITIAL_ISS_LOCATION_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
  error: null,
};

const issLocation = (
  state = INITIAL_ISS_LOCATION_STATE,
  action,
) => {
  switch (action.type) {
  case actions.GET_ISS_LOCATION_SUCCESS:
    return {
      ...state,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    };
  case actions.GET_ISS_LOCATION_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default issLocation;
