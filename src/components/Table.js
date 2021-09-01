import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense as deleteItem } from '../actions';

class Table extends Component {
  renderHeader() {
    const headers = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return headers.map((header) => (<th key={ header }>{header}</th>));
  }

  renderTableInfo() {
    const { expenses, deleteExpense } = this.props;
    return expenses
      .map(({ description, tag, method, value, currency, exchangeRates, id }) => {
        const fixValue = Number(exchangeRates[currency].ask).toFixed(2);
        const total = (Number(value) * Number(exchangeRates[currency].ask)).toFixed(2);
        return (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ value }</td>
            <td>{ currency }</td>
            <td>{ exchangeRates[currency].name }</td>
            <td>{ `${fixValue}` }</td>
            <td>{ `${total}` }</td>
            <td>Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => deleteExpense(id) }
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>{ this.renderHeader() }</tr>
          {this.renderTableInfo()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (index) => dispatch(deleteItem(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

// https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
// https://stackoverflow.com/questions/57519905/how-delete-item-from-redux-state
