import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class ExpenseTable extends React.Component {
  constructor() {
    super();

    this.setTableHeaders = this.setTableHeaders.bind(this);
    this.setTableData = this.setTableData.bind(this);
    this.findById = this.findById.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  // Retorna um Header com o ite passado
  setTableHeaders(item) {
    return (
      <th className="tableHeaders" key={ item }>
        { item }
      </th>);
  }

  // Cria itens da Table
  setTableData(item, i) {
    const { description, tag, method, value, currency } = item;
    const { ask, name } = item.exchangeRates[currency];

    const valorConv = Number(value) * Number(ask);
    return (
      // cada <tr> tem como id o index
      <tr key={ description + i } id={ i }>
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
            onClick={ this.removeItem }
          >
            remove

          </button>
        </td>
      </tr>
    );
  }

  // recebe um ID e encontra em EXPENSES o alvo e REMOVE
  findById({ id }) {
    const { expenses, removeExpenseA } = this.props;
    // Não sei porque isso tava retornando o INDEX -1, então eu só adicionei 1 e aceitei
    const expenseAlvo = expenses.indexOf(id) + 1;
    const resultado = expenses.filter((_, index) => index !== expenseAlvo);
    removeExpenseA(resultado);
    return resultado;
  }

  // lida com a remoção de ROWS
  // TODO: ESSA FUNC ESTÁ LIGADA AO BOTÃO DE REMOVE DE CADA ROW
  removeItem(event) {
    const { findById } = this;
    const alvo = event.target;
    const alvoRow = alvo.parentNode.parentNode;
    findById(alvoRow);
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
          { expenses.map((crr, i) => this.setTableData(crr, i)) }
        </tbody>
      </table>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeExpenseA: (payload) => dispatch(removeExpense(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpenseA: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
