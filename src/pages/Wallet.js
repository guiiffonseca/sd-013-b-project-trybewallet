import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{email}</div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select role="combobox" name="currency" id="currency">
              <option value="real">Real</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select role="combobox" name="payment" id="payment">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito" selected>Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="despesa">
            Tag
            <select role="combobox" name="despesa" id="despesa">
              <option value="aliimentacao">Alimentação</option>
              <option value="lazer" selected>Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps)(Wallet);
