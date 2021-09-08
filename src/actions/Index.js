import apideMoedas from '../ApiMoedas';

const fazerLogin = (state) => ({
  type: 'LOGIN',
  state,
});

export default fazerLogin;

// Actions das Api Moedas

export const CURRENCIES = 'CURRENCIES';

export const receiveMoedas = (payload) => ({
  type: CURRENCIES,
  payload });

export const fetchMoedas = () => async (dispatch) => {
  const moedasData = await apideMoedas();
  dispatch(receiveMoedas(moedasData));
};
