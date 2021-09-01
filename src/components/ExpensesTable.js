import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderTable from './HeaderTable';
import { removeExpenseAction } from '../actions';

class ExpensesTable extends Component {
  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <div>
        <table>
          <HeaderTable />
          { expenses.map((expense) => (
            <tr key={ expense.id }>
              <th>
                { expense.description }
              </th>
              <th>
                { expense.tag }
              </th>
              <th>
                { expense.method }
              </th>
              <th>
                { expense.value }
              </th>
              <th>
                { expense.currency }
              </th>
              <th>
                { expense.currency }
              </th>
              <th>
                { expense.currency }
              </th>
              <th>
                Real
              </th>
              <button type="button">Editar</button>
              <button type="button" data-testid="delete-btn" onClick={ removeExpense }>
                Excluir
              </button>
            </tr>
          )) }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (value) => dispatch(removeExpenseAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
  removeExpense: PropTypes.func.isRequired,
};
