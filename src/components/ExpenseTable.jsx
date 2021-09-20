import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseTable extends React.Component {
  constructor() {
    super();

    this.setTableHeaders = this.setTableHeaders.bind(this);
    this.setTableData = this.setTableData.bind(this);
  }

  setTableHeaders(item) {
    return (
      <th className="tableHeaders" key={ item }>
        { item }
      </th>);
  }

  setTableData(item) {
    const { description, tag, method, value, currency } = item;
    const { ask, name } = item.exchangeRates[currency];
    console.log(name);

    const valorConv = Number(value) * Number(ask);
    return (
      <tr key={ description }>
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
          <button id="removeBtn" type="button">remove</button>
        </td>
      </tr>
    );
  }

  render() {
    const tableHeaderArr = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
      'Editar/Excluir'];
    const { setTableHeaders } = this;
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          {tableHeaderArr.map((crr) => setTableHeaders(crr))}
        </thead>
        <tbody>
          {expenses.map((crr) => this.setTableData(crr))}
        </tbody>
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
