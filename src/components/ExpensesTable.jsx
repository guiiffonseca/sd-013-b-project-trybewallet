import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  renderTableHeader() {
    return (
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
    );
  }

  renderRow(expense) {
    const expenseName = expense.exchangeRates[expense.currency].name;
    const splittedName = expenseName.split('/');
    const correctExpenseName = splittedName[0];

    const conversion = expense.exchangeRates[expense.currency].ask;
    const conversionNumber = parseFloat(conversion);
    const roundedConversionString = conversionNumber.toFixed(2);

    const convertedValue = ((conversionNumber) * (expense.value));
    const roundedConvertedValueString = convertedValue.toFixed(2);

    return (
      <tr key={ expense.id }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.value}</td>
        <td>{correctExpenseName}</td>
        <td>
          {roundedConversionString}
        </td>
        <td>{roundedConvertedValueString}</td>
        <td>Real</td>
        <td>Editar/Excluir</td>
      </tr>
    );
  }

  renderTable(expenses) {
    return (
      <table border="2">
        {this.renderTableHeader()}
        {expenses.map((expense) => this.renderRow(expense))}
      </table>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        { expenses.length > 0
          ? this.renderTable(expenses) : <h4>Nenhum registro por enquanto</h4>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(ExpensesTable);
