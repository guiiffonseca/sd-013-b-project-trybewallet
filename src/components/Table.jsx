import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      description: '',
    };
  }
  render() {
    const { expenses } = this.props;
    const { description } = this.state;
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
            {
              expenses.length <= 0 ? description
                : ( expenses.map((expense) => {
                  return (
                    <tr>
                      <td>{ expense.description }</td>
                      <td>{ expense.tag }</td>
                      <td>{ expense.method }</td>
                      <td>{ expense.value }</td>
                      <td>{ expense.exchangeRates[expense.currency].name }</td>
                      <td>{ parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
                      <td>{ (parseFloat(expense.exchangeRates[expense.currency].ask) * expense.value).toFixed(2) }</td>
                      <td>Real</td>
                    </tr>
                  )
                }))
            }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
