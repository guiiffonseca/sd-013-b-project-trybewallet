const INITIAL_STATE = [];

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'some':
    return [...state, action.value];
  default:
    return state;
  }
};

export default user;
