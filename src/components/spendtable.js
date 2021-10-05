import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense as removeItem } from '../actions';

class spendtable extends Component {
  renderHeader() {
    const headers = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return headers.map((header) => (<th key={ header }>{header}</th>));
  }

  renderTableInfo() {
    const { expenses, removeExpense } = this.props;
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
                onClick={ () => removeExpense(id) }
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

spendtable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (index) => dispatch(removeItem(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(spendtable);
