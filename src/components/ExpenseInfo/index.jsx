import React from 'react';
import PropTypes from 'prop-types';

import formatCurrency from '../../utils/formatCurrency';

const ExpenseInfo = ({
  value,
  description,
  currency,
  method,
  tag,
  exchangeRates,
}) => {
  const { name, ask } = exchangeRates[currency];
  const convertedValue = parseFloat(value * ask);

  return (
    <tr>
      <td>{ description }</td>
      <td>{ tag }</td>
      <td>{ method }</td>
      <td>{ formatCurrency(value) }</td>
      <td>{ name.split('/')[0] }</td>
      <td>{ formatCurrency(ask) }</td>
      <td>{ formatCurrency(convertedValue) }</td>
      <td>Real</td>
    </tr>
  );
};

ExpenseInfo.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ExpenseInfo;
