import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses as deleteExpensesAction } from '../actions';

class Table extends React.Component {
  render() {
    const { expenses, deleteExpenses } = this.props;
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
          <th>Moedas de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {
          expenses
            .map(({ id, description, tag, method, value, currency, exchangeRates }) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/', 1) }</td>
                <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{ (exchangeRates[currency].ask * value).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-bnt"
                    onClick={ () => deleteExpenses(id) }
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
        }
      </table>
    );
  }
}

Table.propTypes = {
  map: PropTypes.arrayOf(PropTypes.object),
  deleteExpenses: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenses: (expenses) => dispatch(deleteExpensesAction(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
