import React from 'react';
import { connect } from 'react-redux';

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
    console.log();
    const { ask, name } = item.exchangeRates[currency];

    const valorConvertido = Number(value) * Number(ask);
    return (
      <tr key={ description }>
        <td className="tableData">{description}</td>
        <td className="tableData">{tag}</td>
        <td className="tableData">{method}</td>
        <td className="tableData">{value}</td>
        <td className="tableData">{name}</td>
        <td className="tableData">{item.exchangeRates[currency].ask}</td>
        <td className="tableData">{valorConvertido.toFixed(2)}</td>
        <td className="tableData">Real Brasileiro</td>
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
  moedas: state.wallet.moedas,
});

export default connect(mapStateToProps)(ExpenseTable);
