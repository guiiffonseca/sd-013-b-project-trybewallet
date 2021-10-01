import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteFromList } from '../actions/index';

class ExpensesTable extends React.Component {
  render() {
    const { expenses, deleteItem } = this.props;
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
        { expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>{ expense.exchangeRates[expense.currency].name }</td>
            <td>
              {
                parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)
              }
            </td>
            <td>
              { (expense.value * expense
                .exchangeRates[expense.currency].ask).toFixed(2) }
            </td>
            <td>Real</td>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => deleteItem(
                expense.id,
                expense.value,
                expense.exchangeRates[expense.currency].ask,
              ) }
            >
              Deletar
            </button>
          </tr>
        )) }
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id, value, ask) => dispatch(deleteFromList(id, value, ask)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
