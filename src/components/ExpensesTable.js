import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const headers = [
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

class ExpensesTable extends React.Component {
  formatedValues(xpense) {
    const { description, tag, method, value, currency, exchangeRates } = xpense;

    const currencyFullName = exchangeRates[currency].name.split('/')[0];
    const convertedValue = (value * exchangeRates[currency].ask).toFixed(2);
    const currencyBase = 'Real';
    const currencyValue = parseFloat(exchangeRates[currency].ask).toFixed(2);

    const novaOrdem = [
      description,
      tag,
      method,
      value,
      currencyFullName,
      currencyValue,
      convertedValue,
      currencyBase,
    ];

    return (novaOrdem.map((item) => <td key={ item }>{item}</td>));
  }

  render() {
    const { allExpenses } = this.props;

    return (
      <table>
        <tr>
          {headers.map((header) => <th key={ header }>{header}</th>)}
        </tr>
        {allExpenses.map((expense) => (
          <tr key={ expense }>
            {this.formatedValues(expense)}
          </tr>
        ))}
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  allExpenses: PropTypes.object,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  allExpenses: wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);
