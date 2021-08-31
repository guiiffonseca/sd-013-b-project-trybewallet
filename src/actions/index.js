const USER_INFO_ACTIONS = {
  SET_INFO: 'SET_INFO',
};

export const setInfo = (payload) => ({
  type: USER_INFO_ACTIONS.SET_INFO,
  payload,
});

export default USER_INFO_ACTIONS;
