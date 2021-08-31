import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';

class ExpenseBoard extends React.Component {
  render() {
    const { expenses = [], handleClick, editExpense } = this.props;
    return (
      <table>
        <TableHeader />
        <tbody>
          { expenses.sort((expenseA, expenseB) => expenseA.id - expenseB.id)
            .map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ expense.value }</td>
                <td>
                  { expense.exchangeRates[expense.currency].name.replace(/\/.{1,}/, '') }
                </td>
                <td>
                  { Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }
                </td>
                <td>
                  { Number(expense.value * expense.exchangeRates[expense.currency].ask)
                    .toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => editExpense(expense) }
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => handleClick(expense) }
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

ExpenseBoard.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default ExpenseBoard;
