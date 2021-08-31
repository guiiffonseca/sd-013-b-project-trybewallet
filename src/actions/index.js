import { requestCoins, filterCoins } from '../Service/Coins';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const SET_EXPENSIVE = 'SET_EXPENSIVE';

export const SET_CURRENCIES = 'SET_CURRENCIES';

export const SET_REMOVE_EXPENSIVE = 'SET_REMOVE_EXPENSIVE';

export const setUser = (payload) => ({ type: SET_USER_EMAIL, payload });

export const setExpensive = (payload) => ({ type: SET_EXPENSIVE, payload });

export const setCurrencies = (payload) => ({ type: SET_CURRENCIES, payload });

export const setRemoveExpensive = (payload) => ({ type: SET_REMOVE_EXPENSIVE, payload });

export const fetchCotaçãoMomento = (payload) => async (dispatch) => {
  const cotações = await requestCoins();
  dispatch(setExpensive({ ...payload, exchangeRates: cotações }));
};
export const fetchMoedas = () => async (dispatch) => {
  const moedas = await filterCoins();
  dispatch(setCurrencies(moedas));
};
