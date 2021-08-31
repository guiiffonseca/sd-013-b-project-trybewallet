import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tableHeaderContent, currenciesExplicitName } from '../data';
import { editExpenseAction, removeExpenseAction } from '../actions';

class ExpensesTable extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveExpense = this.handleRemoveExpense.bind(this);
    this.handleEditExpense = this.handleEditExpense.bind(this);
  }

  handleRemoveExpense(index) {
    const { expenses, removeExpense } = this.props;
    const deepCopy = [...expenses];
    deepCopy.splice(index, 1);
    removeExpense(deepCopy);
  }

  handleEditExpense(index) {
    const { editExpense } = this.props;
    editExpense(index);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            { tableHeaderContent.map((content, index) => (
              <th key={ index }>{content}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { expenses.map(({
            id, description, value, tag, method, currency, exchangeRates,
          }, index) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currenciesExplicitName[currency]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{ (Number(exchangeRates[currency].ask) * Number(value)).toFixed(2)}</td>
              <td>{currenciesExplicitName.BRL}</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                  onClick={ () => this.handleEditExpense(index) }
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.handleRemoveExpense(index) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (payload) => dispatch(removeExpenseAction(payload)),
  editExpense: (payload) => dispatch(editExpenseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
// export default ExpensesTable;

ExpensesTable.propTypes = {
  expenses: PropTypes.array,
}.isRequeride;
