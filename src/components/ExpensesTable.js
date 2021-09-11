import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderTable from './HeaderTable';
import { removeExpenseAction } from '../actions';

class ExpensesTable extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete({ target }) {
    const { removeExpense } = this.props;
    removeExpense(target.id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <HeaderTable />
          { expenses
            .map(({ id, description, tag, method, value, currency, exchangeRates }) => (
              <tr key={ id }>
                <td>
                  { description }
                </td>
                <td>
                  { tag }
                </td>
                <td>
                  { method }
                </td>
                <td>
                  { value }
                </td>
                <td>
                  { (exchangeRates[currency].name).split('/')[0] }
                </td>
                <td>
                  { Math.floor(exchangeRates[currency].ask * 100) / 100 }
                </td>
                <td>
                  { Math.floor(
                    (parseInt(value, 10) * exchangeRates[currency].ask) * 100,
                  ) / 100 }
                </td>
                <td>
                  Real
                </td>
                <button type="button">Editar</button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ this.handleDelete }
                  id={ id }
                >
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
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
  removeExpense: PropTypes.func.isRequired,
};
