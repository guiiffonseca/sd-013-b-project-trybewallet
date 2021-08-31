const actions = {
  LOGIN_EMAIL: 'LOGIN_EMAIL',
};

export const loginEmail = (payload) => ({
  type: actions.LOGIN_EMAIL,
  payload,
});

export default actions;
