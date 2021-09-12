import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (<div>
      <h1>TrybeWallet</h1>
      <span data-testid="email-field">{email}</span>
      <span data-testid="total-field">0</span>
      <span data-testid="header-currency-field"> BRL</span>
      <br />
      <form id="transaction-data">
        <label htmlFor="expenses">
          Valor: 
          <input type="text" id="expenses" name="expenses" />
        </label><br />
        <label htmlFor="description">
          Descrição: 
          <input type="text" id="description" name="description" /> 
        </label><br />
        <label>
          Moeda: 
          <select form="transaction-data" name="currency">
          </select>    
        </label><br />
        <label>
          Método de Pagamento: 
          <select form="transaction-data" name="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>    
        </label><br />
        <label>
          Tag: 
          <select form="transaction-data" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>    
        </label><br />
      </form>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
