import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExchanges extends React.Component {
  constructor(props) {
    super(props);
    this.createExpenses = this.createExpenses.bind(this);
  }

  createExpenses() {
    const { expenses } = this.props;
    return expenses.map(({
      exchangeRates, id, value, descricao, currency, method, tag,
    }) => (
      <div key={ id }>
        <table>
          <td>{descricao}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{currency}</td>
          <td>{exchangeRates[currency].name}</td>
          <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>{(exchangeRates[currency].ask * parseFloat(value)).toFixed(2)}</td>
          <td>Real</td>
        </table>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </thead>
        </table>
        {this.createExpenses()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableExchanges.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TableExchanges);
