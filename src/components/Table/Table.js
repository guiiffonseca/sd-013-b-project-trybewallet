import React from 'react';
import { connect } from 'react-redux';
import { removeExpense as reduxRemoveExpense, removeExpense } from '../../actions';

const columns = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

const currencyTrans = {
  USD: 'Dólar Comercial',
  USDT: 'Dolar Turismo',
  CAD: 'Dólar Canadense',
  GBP: 'Libra Esterlina',
  ARG: 'Peso Argentino',
  BTC: 'Bitcoin',
  LTC: 'Litecoin',
  EUR: 'Euro',
};

function Table(props) {
  const { expenses, removeExpense } = props;
  // const deleteClick = (e) => {
  //   removeExpense(e.)
  //   e.target.parentNode.parentNode.remove();
  // };
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => <th key={ column }>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{currencyTrans[expense.currency]}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>{(Number(expense.exchangeRates[expense.currency].ask) * Number(expense.value)).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button type="button" data-testid="delete-btn" onClick={ () => removeExpense(expenses, expense) }>
                Delete
              </button>
            </td>
          </tr>
        ))}
        {/* <tr> </tr> */}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expenses, target) => dispatch(reduxRemoveExpense(expenses, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
