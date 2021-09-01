import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    const isEmpty = expenses.length === 0;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {isEmpty ? <p>Sua carteira esta vazia</p>
          : expenses.map((expense, index) => {
            const { description, tag, method, value, exchangeRates, currency } = expense;
            return (
              <tr key={ index }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>
                  {exchangeRates[currency].name
                    .replace('/Real Brasileiro', '')}
                </td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
                <td>Real</td>
              </tr>
            );
          })}
      </table>
    );
  }
}

// value(pin):""
// description(pin):""
// currency(pin):"USD"
// method(pin):"Dinheiro"
// tag(pin):"Alimentação"
// id(pin):0

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
