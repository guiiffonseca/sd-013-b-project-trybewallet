import apiFetchMoedas from '../ApiMoedas';

// Action userEmail:

export const USER_EMAIL = 'USER_EMAIL';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

// Action Moedas:

export const USER_MOEDA = 'USER_MOEDA';

export const userMoedas = (payload) => ({
  type: USER_MOEDA,
  payload,
});

export const fetchMoedas = () => async (dispatch) => {
  const data = await apiFetchMoedas();
  dispatch(userMoedas(data));
};
