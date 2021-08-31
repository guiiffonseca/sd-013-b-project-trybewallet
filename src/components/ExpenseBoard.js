import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';

class ExpenseBoard extends React.Component {
  render() {
    const { expenses = [] } = this.props;
    if (expenses.length !== 0) {
      console.log((Number(expenses[0].exchangeRates.USD.ask).toFixed(2)));
    }
    return (
      <table>
        <TableHeader />
        <tbody>
          { expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>
                { Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                { Number(expense.value * expense.exchangeRates[expense.currency].ask)
                  .toFixed(2) }
              </td>
              <td>Real</td>
              <td>Editar/Excluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ExpenseBoard.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ExpenseBoard;
