import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateExpenses } from '../actions/index';

class TableExchanges extends React.Component {
  constructor(props) {
    super(props);
    this.createExpenses = this.createExpenses.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense(id) {
    const { expenses, deleteExpense } = this.props;
    const deletedExpense = expenses.filter((expense) => expense.id !== id);
    deleteExpense(deletedExpense);
  }

  createExpenses() {
    const { expenses } = this.props;
    return expenses.map(({
      exchangeRates, id, value, description, currency, method, tag,
    }) => (
      <div key={ id }>
        <table>
          <tbody>
            <tr>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currency}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{(exchangeRates[currency].ask * parseFloat(value)).toFixed(2)}</td>
              <td>Real</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
        >
          Editar
        </button>
        <button
          data-testid="delete-btn"
          type="button"
          onClick={ () => this.deleteExpense(id) }
        >
          Excluir
        </button>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>
        {this.createExpenses()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (state) => dispatch(updateExpenses(state)),
});

TableExchanges.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableExchanges);
