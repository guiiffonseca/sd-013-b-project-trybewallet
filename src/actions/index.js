const actions = {
  GET_EMAIL: 'GET_EMAIL',
};

export const getEmail = (payload) => ({
  type: actions.GET_EMAIL,
  payload,
});

export default actions;
