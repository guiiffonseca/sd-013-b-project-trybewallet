import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense as removeExpenseAction } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  currencyIdentifier(currency) {
    switch (currency) {
    case 'USD':
      return 'Dólar Comercial';
    case 'EUR':
      return 'Euro';
    default: return currency;
    }
  }

  handleDelete({ target }) {
    const { removeExpense, expenses } = this.props;
    removeExpense(target.id, expenses);
  }

  render() {
    const { expenses } = this.props;
    return (
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
        { expenses.map((expense) => (
          <thead key={ expense.id }>
            <tr>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ this.currencyIdentifier(expense.currency) }</td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                { expense.value * expense.exchangeRates[expense.currency].ask}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  id={ expense.id }
                  onClick={ this.handleDelete }
                >
                  Excluir
                </button>
              </td>
            </tr>
          </thead>
        ))}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id, expenses) => dispatch(removeExpenseAction(id, expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
