import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import deleteExpense from '../actions/deleteExpense';

class ExpensesTable extends Component {
  constructor() {
    super();

    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    const { expenses, deleteExpense: delExpense } = this.props;
    return expenses.map(({
      id,
      description,
      tag,
      method,
      value,
      currency,
      exchangeRates,
    }) => {
      const { name, ask } = exchangeRates[currency];

      return (
        <tr key={ name }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ name }</td>
          <td>{ Number(ask).toFixed(2) }</td>
          <td>{ (value * ask).toFixed(2) }</td>
          <td>Real</td>
          <td>
            <button
              data-testid="delete-btn"
              type="button"
              onClick={ () => { delExpense(id); } }
            >
              Deletar
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
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
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({ expenses: wallet.expenses });

const mapDispatchToProps = { deleteExpense };

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
