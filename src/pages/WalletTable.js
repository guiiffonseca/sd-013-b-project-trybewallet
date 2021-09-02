import React from 'react';
import PropTypes from 'prop-types';

export default class WalletTable extends React.Component {
  constructor(props) {
    super(props);
    this.makeTable = this.makeTable.bind(this);
  }

  makeTable(expenses) {
    return expenses.map((item) => (
      <tr key={ item.id }>
        <td>
          {item.description}
        </td>
        <td>
          {item.tag}
        </td>
        <td>
          {item.method}
        </td>
        <td>
          {item.value}
        </td>
        <td>
          {item.exchangeRates[item.currency].name}
        </td>
        <td>
          {parseFloat((item.exchangeRates[item.currency].ask)).toFixed(2)}
        </td>
        <td>
          {parseFloat(
            (item.exchangeRates[item.currency].ask * item.value
            ),
          ).toFixed(2)}
        </td>
        <td>
          Real
        </td>
      </tr>
    ));
  }

  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th> Descrição </th>
            <th> Tag </th>
            <th> Método de pagamento </th>
            <th> Valor </th>
            <th> Moeda </th>
            <th> Câmbio utilizado </th>
            <th> Valor convertido </th>
            <th> Moeda de conversão </th>
            <th> Editar/Excluir </th>
          </tr>
        </thead>
        <tbody>
          {expenses
            && this.makeTable(expenses)}
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
