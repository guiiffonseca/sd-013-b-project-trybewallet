import React from 'react';
import { connect } from 'react-redux';

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
  const { expenses } = props;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => <th key={ column }>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.value }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{currencyTrans[expense.currency]}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>{(Number(expense.exchangeRates[expense.currency].ask) * Number(expense.value)).toFixed(2)}</td>
            <td>Real</td>
            {/* <td>{expense.}</td> */}
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

export default connect(mapStateToProps)(Table);
