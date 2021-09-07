export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const WALLET_VALUE = 'WALLET_VALUE';

export const loginSubmit = (payload) => (
  {
    type: LOGIN_SUBMIT, payload,
  }
);

export const walletValue = (payload) => (
  {
    type: WALLET_VALUE, payload,
  }
);

// export const fetchCotation = async (state) => (dispatch) =>
// }
