import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseItem extends Component {
  render() {
    const { expense } = this.props;
    const { description, method, tag, value, currency, exchangeRates } = expense;

    const [currencyName] = exchangeRates[currency].name.split('/');
    const ask = parseFloat(exchangeRates[currency].ask);
    const fixedAsk = ask.toFixed(2);

    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ currencyName }</td>
        <td>{ fixedAsk }</td>
        <td>{ value * ask }</td>
        <td>Real</td>
      </tr>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ExpenseItem;

// {
//   "id": 0,
//   "value": "1",
//   "description": "gjgghjg",
//   "currency": "USD",
//   "method": "Dinheiro",
//   "tag": "Alimentação",
//   "exchangeRates": {
//       "USD": {
//           "code": "USD",
//           "codein": "BRL",
//           "name": "Dólar Americano/Real Brasileiro",
//           "high": "5.1853",
//           "low": "5.1845",
//           "varBid": "0.0005",
//           "pctChange": "0.01",
//           "bid": "5.184",
//           "ask": "5.185",
//           "timestamp": "1630357203",
//           "create_date": "2021-08-30 18:00:03"
//       }
//   }
// }
