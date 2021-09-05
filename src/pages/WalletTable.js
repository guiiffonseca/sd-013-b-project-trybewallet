import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';

class WalletTable extends React.Component {
  constructor(props) {
    super(props);
    this.makeTable = this.makeTable.bind(this);
  }

  makeTable(expenses) {
    const { deleteExpense } = this.props;
    if (expenses.length) {
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
          <td>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => deleteExpense(item) }
            >
              Deletar
            </button>
          </td>
        </tr>
      ));
    }
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
          {this.makeTable(expenses)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);

WalletTable.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
