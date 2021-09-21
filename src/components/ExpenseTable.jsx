import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense as removeExpenseA } from '../actions';

class ExpenseTable extends React.Component {
  constructor() {
    super();
    this.setTableHeaders = this.setTableHeaders.bind(this);
    this.setTableData = this.setTableData.bind(this);
    this.renderTableBody = this.renderTableBody.bind(this);
    this.removeParentNode = this.removeParentNode.bind(this);
    this.subtractTotal = this.subtractTotal.bind(this);
    this.findById = this.findById.bind(this);
  }

  setTableHeaders(item) {
    return (
      <th className="tableHeaders" key={ item }>
        { item }
      </th>);
  }

  setTableData(item, index) {
    const { description, tag, method, value, currency } = item;
    const { ask, name } = item.exchangeRates[currency];
    const valorConv = Number(value) * Number(ask);

    return (
      <tr key={ description } className="expenseRow" id={ index }>
        <td className="tableData">{description}</td>
        <td className="tableData">{tag}</td>
        <td className="tableData">{method}</td>
        <td className="tableData">{value}</td>
        <td className="tableData">{name}</td>
        <td className="tableData" id="ask">{Math.round(ask * 100) / 100}</td>
        <td className="tableData" id="valorConv">{Math.floor(valorConv * 100) / 100}</td>
        <td className="tableData">Real</td>
        <td className="tableData">
          <button id="editBtn" type="button">edit</button>
          <button
            id="removeBtn"
            type="button"
            data-testid="delete-btn"
            onClick={ this.removeParentNode }
          >
            remove

          </button>
        </td>
      </tr>
    );
  }

  subtractTotal(value) {
    const totalField = document.getElementById('total');
    const subtraction = Number(totalField.innerHTML) - value;
    totalField.innerHTML = subtraction;
  }

  findById(array, id) {
    return array.find((crr) => crr.id === id);
  }

  removeParentNode(event) {
    const { id } = event.target.parentNode.parentNode;
    const { expenses, removeExpense } = this.props;
    const { value, currency } = expenses[id];
    console.log(this.findById(expenses, Number(id)));

    const { ask } = expenses[id].exchangeRates[currency];
    const finalValue = value * ask;
    removeExpense(expenses.splice(id, 1));
    document.getElementById(id).remove();

    console.log(Math.round(finalValue * 100) / 100);

    this.subtractTotal(finalValue.toFixed(2));
  }

  renderTableBody() {
    const { expenses } = this.props;

    if (expenses.length === 0) {
      return <tbody />;
    }
    return (
      <tbody>
        {
          expenses.map((crr, i) => (
            this.setTableData(crr, i)
          ))
        }

      </tbody>
    );
  }

  render() {
    const tableHeaderArr = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
      'Editar/Excluir'];
    const { setTableHeaders } = this;

    return (
      <table>
        <thead>
          {tableHeaderArr.map((crr) => setTableHeaders(crr))}
        </thead>
        { this.renderTableBody() }

      </table>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (payload) => dispatch(removeExpenseA(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
