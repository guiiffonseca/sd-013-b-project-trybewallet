import actions from '../actions';

const INICIAL_STATE = {
  user: {
    email: '',
  },
};

const userReduce = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case actions.GetUser:
    return { ...state, user: { email: action.payload } };
  default:
    return state;
  }
};

export default userReduce;
