// Coloque aqui suas actions
import Moedas from '../api';
// import store from '../store/store';

let contador = 0;
export function ClickButtonLogin(valorRecebido) {
  return (
    {
      type: 'CLICK_BUTTON_LOGIN',
      email: valorRecebido,
    }
  );
}

export function ClickButtonDespesas(Valor) {
  // const Estado = store.getState();
  // const valorAtual = Estado.wallet.expenses;
  return (
    {
      type: 'CLICK_WALLET',
      expenses: Valor,
    }
  );
}

export const ClickButtonDespesasThunk = (info) => async (dispatch) => {
  const response = await Moedas();
  const { valor, descricao, moeda, metodo, tag } = info;

  const valorAction = {
    id: contador,
    value: valor,
    currency: moeda,
    method: metodo,
    tag,
    description: descricao,
    exchangeRates: response,
  };
  contador += 1;

  dispatch(ClickButtonDespesas(valorAction));
};
