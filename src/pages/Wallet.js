import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  forms() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            name="valor"
            id="valor"
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            type="text"
            name="descrição"
            id="descrição"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option name="teste" value="teste">teste</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option name="Dinheiro" value="dinheiro">Dinheiro</option>
            <option name="Cartão de Crédito" value="crédito">Cartão de Crédito</option>
            <option name="Cartão de Débito" value="débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option name="Alimentação" value="ali">Alimentação</option>
            <option name="Lazer" value="laz">Lazer</option>
            <option name="Trabalho" value="trab">Trabalho</option>
            <option name="Transporte" value="trans">Transporte</option>
            <option name="Saúde" value="saud">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            0
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        {this.forms()}
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
