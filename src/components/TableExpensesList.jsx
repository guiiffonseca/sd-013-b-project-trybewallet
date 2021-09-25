import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExpensesList extends Component {
  render() {
    const { expenses } = this.props;
    // const teste = 'dolar americano/real brasileiro';
    // const result = teste.split('/')[1];
    // console.log(teste, result);
    return (
      <table>
        <thead>
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
        </thead>
        <tbody>
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
                <td>
                  {
                    parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)
                  }
                </td>
                <td>
                  {
                    parseFloat(expense.value
                      * expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStatetoProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()),
}.isRequired;

export default connect(mapStatetoProps, null)(TableExpensesList);
