export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const setEmail = (value) => ({ type: SET_EMAIL, payload: value });
export const setPassword = (value) => ({ type: SET_PASSWORD, payload: value });
