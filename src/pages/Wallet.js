import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field"> BRL</span>
        <br />
        <form id="transaction-data">
          <label htmlFor="expenses">
            Valor:
            <input type="text" id="expenses" name="expenses" />
          </label>
          <br />
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" name="description" />
          </label>
          <br />
          <label htmlFor="currency">
            Moeda:
            <select id="currency" form="transaction-data" name="currency">
              <option>xablau</option>
            </select>
          </label>
          <br />
          <label htmlFor="payment-method">
            Método de Pagamento:
            <select id="payment-method" form="transaction-data" name="payment-method">
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
            </select>
          </label>
          <br />
          <label htmlFor="tag">
            Tag:
            <select id="tag" form="transaction-data" name="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
