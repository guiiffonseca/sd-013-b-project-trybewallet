import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExpenseItems extends Component {
  render() {
    const { expense } = this.props;
    const { description, method, tag, value, currency, exchangeRates } = expense;

    const [currencyName] = exchangeRates[currency].name.split('/');
    const ask = parseFloat(exchangeRates[currency].ask);
    const askToFixed = ask.toFixed(2);

    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ currencyName }</td>
        <td>{ askToFixed }</td>
        <td>{ value * ask }</td>
        <td>Real</td>
      </tr>
    );
  }
}

ExpenseItems.propTypes = {
  expense: PropTypes.objectOf(PropTypes.any).isRequired,
};
