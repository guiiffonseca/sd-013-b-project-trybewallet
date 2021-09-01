import React from 'react';

class ItensTable extends React.Component {
  render() {
    const { expense } = this.props;
    const { description, tag, method, value, currency, exchangeRates } = expense;
    const [currencyTitle] = exchangeRates[currency].name.split('/');
    const { ask } = exchangeRates[currency];
    const cambio = Number(ask).toFixed(2);
    const transformedValue = (value * ask).toFixed(2);
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{currencyTitle}</td>
        <td>{cambio}</td>
        <td>{transformedValue}</td>
        <td>Real</td>

      </tr>
    );
  }
}

export default ItensTable;
