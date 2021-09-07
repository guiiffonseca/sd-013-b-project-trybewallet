export const ACTIONS = {
  LOGIN: 'login',
};

export const setEmail = (email) => ({ type: ACTIONS.LOGIN, payload: email });
