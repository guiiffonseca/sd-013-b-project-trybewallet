import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense as deleteExpenseAction } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.tBody = this.tBody.bind(this);
    this.tHead = this.tHead.bind(this);
    // this.removeRow = this.removeRow.bind(this);
  }

  /* removeRow({ target }) {
    const { deleteExpense } = this.props;
    const row = target.parentNode.parentNode;
    const { id } = row;
    deleteExpense(id);
    row.remove();
  } */

  convertFix(param) {
    return parseFloat(param).toFixed(2);
  }

  splitElement(value, symbol, position) {
    return value.split(symbol)[position];
  }

  tHead() {
    return (
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
    );
  }

  tBody() {
    const { expenses, deleteExpense } = this.props;
    return (
      <tbody>
        {expenses.map(
          ({
            id,
            value,
            description,
            method,
            tag,
            currency,
            exchangeRates,
          }) => (
            <tr id={ id } key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{this.splitElement(exchangeRates[currency].name, '/', 0)}</td>
              <td>{this.convertFix(exchangeRates[currency].ask)}</td>
              <td>{this.convertFix(value * exchangeRates[currency].ask)}</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => deleteExpense(id) }
                >
                  delete
                </button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    );
  }

  render() {
    return (
      <table>
        {this.tHead()}
        {this.tBody()}
      </table>
    );
  }
}

Table.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpenseAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
