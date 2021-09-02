import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class TableExpenses extends Component {
  renderTableRow(expenses) {
    const { updateEditing } = this.props;
    return expenses.map((expense, index) => (
      <TableRow key={ index } expense={ expense } updateEditing={ updateEditing } />
    ));
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table className="table-expenses">
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
          <tbody>
            { this.renderTableRow(expenses) }
            {/* { expenses ? expenses.map((expense, index) => (
              <TableRow key={ index } expense={ expense } />
            )) : <p>Adicione uma despesa</p>} */}
          </tbody>
        </table>
      </div>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
  updateEditing: PropTypes.func.isRequired,
};

export default TableExpenses;
