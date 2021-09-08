import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      // loading: true,
    };
  }

  render() {
    const { email, expenses, currencies } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{email}</span>
          <p>{ expenses }</p>
          <span data-testid="total-field">{0}</span>
          <span data-testid="header-currency-field">{currencies}</span>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="text" name="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input id="descrição" type="text" name="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda"> </select>
          </label>
          <label htmlFor="Método de pagamento">
            Método de pagamento
            <select id="Método de pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
  currencies: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = ({ user, wallet }) => {
  const { email } = user;
  const { currencies } = wallet;
  const { expenses } = wallet;
  return {
    email,
    expenses,
    currencies,
  };
};

export default connect(mapStateToProps)(Wallet);
