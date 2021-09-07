import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemTable extends Component {
  render() {
    const { expense } = this.props;
    const { description, tag, method, value, currency, exchangeRates } = expense;
    const currName = exchangeRates[currency].name.split('/Real Brasileiro');
    const ask = parseFloat(exchangeRates[currency].ask);
    const correctedValue = value * ask;

    return (
      <tr>
        <td>
          {description}
        </td>
        <td>
          {tag}
        </td>
        <td>
          {method}
        </td>
        <td>
          {value}
        </td>
        <td>
          {currName}
        </td>
        <td>
          {ask.toFixed(2) }
        </td>
        <td>
          {correctedValue}
        </td>
        <td>
          Real
        </td>
      </tr>
    );
  }
}

ItemTable.propTypes = {
  expense: PropTypes.objectOf(PropTypes.any).isRequired,
};
