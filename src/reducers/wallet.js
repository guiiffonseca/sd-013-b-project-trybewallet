// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY, EXPENSES_DATA, DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES_DATA:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }],
    };
  /**
   * Sources:
   *  code review raugusto96
   *  https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-remove-an-item-from-an-array/301447
   * Minha explicação detalhada deste reducer está ao final do documento
  */
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        // retorna uma cópia do array 'expenses' partindo do indice = 0 até o índice que veio por parâmetro
        ...state.expenses.slice(0, action.payload), // o payload é o index
        // retorna uma cópia do array 'expenses' partindo do índice que veio por parâmetro + 1 até array.length
        ...state.expenses.slice(action.payload + 1, state.expenses.length),
      ], // as duas cópias são unidas via spred operator.
      // O retorno é de um array novo, já excluída a posição no índice que veio por parâmetro.
    };
  default:
    return state;
  }
}

export default wallet;

/** Uma explicação do reducer DELETE_EXPENSE
 * O parâmetro corresponde a um índice do array 'expenses', que equivale a posição do array que deve ser deletada.
 *
 * Por ex.: o slice(inicio, fim) retorna um novo array
 *
 * Considerando o array: numeros = [15, 23, 50, 32, 90]
 *
 * numeros.slice(0, 3)
 *
 * retorna: [15, 23, 50]
 *
 * numeros.slice(3+1, numeros.length)
 *
 * retorna: [90]
 *
 * Combinando os sois arrays com spred operator temos: [15, 23, 50, 90]
 *
 * OBS: o indice 'final' é excluído do retorno, ou seja, não é retornado pelo slice.
*/
