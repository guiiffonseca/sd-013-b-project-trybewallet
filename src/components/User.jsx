import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table border="1">
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
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              {console.log(expense.exchangeRates[expense.currency].name)}
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.currency }</td>
              <td>
                { Math.round(
                  expense.exchangeRates[expense.currency].ask * 100,
                ) / 100 }
              </td>
              <td>{ expense.value * expense.exchangeRates[expense.currency].ask }</td>
              <td>Real</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

User.propTypes = {
  expenses: PropTypes.shape(PropTypes.array).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(User);
