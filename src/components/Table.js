import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  renderHeader() {
    const headers = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return headers.map((header) => (<th key={ header }>{header}</th>));
  }

  renderTableInfo() {
    const { expenses } = this.props;
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
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};
// https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
