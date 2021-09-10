import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateExpenses as updateExpensesAction } from '../../actions';

const titles = [
  'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
  'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
];
class ExpenseTable extends Component {
  handleClick(wantedId) {
    const { updateExpenses, expenses } = this.props;
    const index = expenses.findIndex(({ id }) => id === wantedId);
    const invalidIndex = -1;
    if (index !== invalidIndex) {
      const newExpenses = [
        ...expenses.slice(0, index),
        ...expenses.slice(index + 1, expenses.length),
      ];
      updateExpenses(newExpenses);
    }
  }

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
              <td>
                <button
                  type="button"
                  onClick={ () => this.handleClick(id) }
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          );
        })}

      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  updateExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateExpenses: (payload) => dispatch(updateExpensesAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
