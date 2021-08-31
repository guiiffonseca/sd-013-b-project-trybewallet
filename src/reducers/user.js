import { USER_LOGIN } from '../actions';

const initialState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
};

export default user;

// https://github.com/tryber/sd-013-b-live-lectures/blob/lecture/16.4/iss-location/src/reducers/issLocation.js
