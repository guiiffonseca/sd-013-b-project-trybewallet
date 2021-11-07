/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses } from '../actions';

const array = ['Descrição', 'Tag', 'Método de pagamento',
  'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido',
  'Moeda de conversão', 'Editar/Excluir'];

class Table extends Component {
  render() {
    const { expenses, deleteAction } = this.props;
    console.log(expenses, 'expenses');
    return (
      <div>
        <table>
          <thead>
            <tr>
              {array
                .map((elem, index) => (<th key={ index }>{ elem }</th>))}
            </tr>
          </thead>
          <tbody>
            {expenses.map((item, index) => (
              <tr key={ index }>
                <td>{ item.description }</td>
                <td>{ item.tag }</td>
                <td>{ item.method }</td>
                <td>{ item.value }</td>
                <td>{ item.exchangeRates[item.currency].name }</td>
                <td>{ Number(item.exchangeRates[item.currency].ask).toFixed(2) }</td>
                <td>
                  {
                    Number(item.value * item
                    .exchangeRates[item.currency].ask)
                    .toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button type="button">editar</button>
                  <button
                    type="button"
                    onClick={ () => deleteAction(index) }
                  >
                    apagar
                  </button>
                </td>
              </tr>))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  });

const mapDispatchToProps = (dispatch) => ({
deleteAction: (payload) => dispatch(deleteExpenses(payload)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteAction: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
