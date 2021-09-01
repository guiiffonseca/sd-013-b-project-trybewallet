import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class TableExpenses extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table className="table-expenses">
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
          <tbody>
            { expenses.map((expense) => (
              <TableRow key={ expense.id } expense={ expense } />
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.shape([]).isRequired,
};

export default TableExpenses;
