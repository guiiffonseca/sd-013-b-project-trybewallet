import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
  render() {
    const { expense, key } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = expense;
    const userExchange = exchangeRates[currency].ask;
    const userExchangeFixed = parseFloat(userExchange).toFixed(2);
    const userExchangeCurrency = exchangeRates[currency].name.split('/');
    const userExchangeIncomplete = exchangeRates[currency].name;
    return (
      <tr key={ key }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        {/* <td>{ `${currency} ${parseFloat(value).toFixed(2)}` }</td> */}
        <td>
          { userExchangeCurrency[0] ? userExchangeCurrency[0] : userExchangeIncomplete }
        </td>
        <td>{ userExchangeFixed }</td>
        {/* <td>{ `R$ ${userExchangeFixed}` }</td> */}
        <td>{ (userExchange * parseFloat(value)).toFixed(2) }</td>
        {/* <td>{ `R$ ${(userExchangeFixed * parseFloat(value)).toFixed(2)}`}</td> */}
        <td>{ userExchangeCurrency[1] ? userExchangeCurrency[1] : 'Real' }</td>
        {/* <td>
          { userExchangeCurrency[1] ? userExchangeCurrency[1] : 'Real Brasileiro' }
        </td> */}
        <td>Edita/Excluir</td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  key: PropTypes.number.isRequired,
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default TableRow;
