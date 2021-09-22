import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExpenseItems extends Component {
  render() {
    const { expense } = this.props;
    const { description, methods, tags, currency, exchangeRates, expenses } = expense;

    const [currencyName] = exchangeRates[currency].name.split('/');
    const ask = parseFloat(exchangeRates[currency].ask);
    const askToFixed = ask.toFixed(2);

    return (
      <tr>
        <td>{ description }</td>
        <td>{ tags }</td>
        <td>{ methods }</td>
        <td>{ expenses }</td>
        <td>{ currencyName }</td>
        <td>{ askToFixed }</td>
        <td>{ expenses * askToFixed }</td>
        <td>Real</td>
      </tr>
    );
  }
}

ExpenseItems.propTypes = {
  expense: PropTypes.objectOf(PropTypes.any).isRequired,
};
