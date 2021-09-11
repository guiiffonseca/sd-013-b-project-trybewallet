import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableExpense extends Component {
  renderExpenseTableHeader() {
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

  renderExpenseTableBody() {
    const { expenses } = this.props;
    const renderExpense = expenses.map((expense, index) => {
      const currency = expense.exchangeRates[expense.currency];
      return (
        <tr key={ index }>
          <td>{ expense.description }</td>
          <td>{ expense.tag }</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          <td>{ currency.name.split('/')[0] }</td>
          <td>{ Number(currency.ask).toFixed(2) }</td>
          <td>{ (Number(expense.value) * Number(currency.ask)).toFixed(2) }</td>
          <td>Real</td>
        </tr>
      );
    });

    return (
      <tbody>
        { renderExpense }
      </tbody>
    );
  }

  render() {
    return (
      <table>
        { this.renderExpenseTableHeader() }
        { this.renderExpenseTableBody() }
      </table>
    );
  }
}

TableExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpense);
