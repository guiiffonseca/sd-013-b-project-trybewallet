import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './table.css';

export default class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="container">
        <tbody>

          <tr className="table">
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
          {expenses.map((expense) => (
            <tr key={ expense.id } className="table">
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {expense.exchangeRates[expense.currency]
                  .name.split('/')[0] === 'Dólar Americano'
                  ? 'Dólar Comercial' : expense.exchangeRates[expense.currency]
                    .name.split('/')[0]}
              </td>
              <td>
                {
                  Number(expense.exchangeRates[expense.currency]
                    .ask * Number(expense.value))
                    .toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>Editar e Excluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
