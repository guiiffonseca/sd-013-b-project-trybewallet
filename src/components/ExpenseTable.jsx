import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

const data = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class ExpenseTable extends Component {
  render() {
    const { expenses, Delete } = this.props;
    return (
      <table>
        <thead>
          <th>
            {data.map((string, index) => (
              <th key={ index }>{ string }</th>
            ))}
          </th>
        </thead>
        <tbody>
          {expenses.map(
            (
              { description, tag, method, value, exchangeRates, currency },
              index,
            ) => (
              <th key={ index }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>
                  { Number(value * exchangeRates[currency].ask).toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => Delete({ index }) }
                  >
                    Excluir
                  </button>
                </td>
              </th>
            ),
          )}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  Delete: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
// https://tableless.com.br/tabelas-semanticas/
