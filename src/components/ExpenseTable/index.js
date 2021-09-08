import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const titles = [
  'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
  'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
];
class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          {titles.map((title) => (
            <th key={ title }>{title}</th>
          ))}
        </tr>
        {expenses.map(({
          value, description, currency, method, tag, id, exchangeRates,
        }) => {
          const currencyName = exchangeRates[currency].name.split('/', 1);
          const exchangeRate = parseFloat(exchangeRates[currency].ask);
          value = parseFloat(value);
          const convertedValue = value * exchangeRate;
          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currencyName}</td>
              <td>{exchangeRate.toFixed(2)}</td>
              <td>{convertedValue.toFixed(2)}</td>
              <td>Real</td>
            </tr>
          );
        })}

      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
