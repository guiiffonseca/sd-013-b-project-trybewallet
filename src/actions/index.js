// Coloque aqui suas action
export const USER_INFO = 'USER_INFO';
export const REQUESTWALLET = 'REQUESTWALLET';
export const WALLET_INFO = 'WALLET_INFO';

export const actionUser = (payload) => ({
  type: USER_INFO,
  payload,
});

export const actionWallet = (payload) => ({
  type: WALLET_INFO,
  payload,
});

export const requestWallet = (payload) => ({
  type: REQUESTWALLET,
  payload,
});

function apiMoeda() {
  const moeda = fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((moe) => moe);
  return moeda;
}

export const requestThunk = () => (dispatch) => {
  try {
    apiMoeda().then((moeda) => {
      dispatch(requestWallet(moeda));
    });
  } catch (error) {
    console.log(error);
  }
};

export const requestAdd = (payload) => (dispatch) => {
  try {
    apiMoeda().then((moeda) => {
      delete moeda.USDT;
      payload.exchangeRates = moeda;
      dispatch(actionWallet(payload));
    });
  } catch (error) {
    console.log(error);
  }
};
