import fetchURL from '../services/currencyAPI';

// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export const getCurrencyThunk = () => (dispatch) => {
  fetchURL()
    // captura a response (resposta) no then(), que é próprio objeto
    .then((object) => {
      // nescessário salvar esse object (response) no estado global
      delete object.USDT;

      // recebe o objeto inteiro
      // const payload = object;

      // recebe somente as chaves do obj
      // const keysCurrency = Object.keys(object);

      // recebe todos os .code do objeto (object), a partir de cada chave.
      // Ex: { USD { code: USD }, BRL { code: BRL }, }
      const currenciesCode = Object.keys(object)
        .map((keyCurrency) => object[keyCurrency].code);

      // recebe o array dos code's
      const payload = currenciesCode;

      // chama a action getCurrency SUCESSO
      dispatch(getCurrency(payload));
    });
};
