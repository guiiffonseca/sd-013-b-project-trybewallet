const INITIAL_STATE = [];

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'some2':
    return [...state, action.value];
  default:
    return state;
  }
};

export default wallet;
