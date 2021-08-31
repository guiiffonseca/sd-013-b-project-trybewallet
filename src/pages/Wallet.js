import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <div>
        <header id="header-wallet">
          <h3 data-testid="email-field">{ email }</h3>
          <p data-testid="total-field"> 0 </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form id="form-currency">
          <label htmlFor="value">
            Valor:
            <input id="value" type="text" name="value" />
          </label>
          <br />
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" name="description" />
          </label>
          <br />
          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              <option>Moedas</option>
            </select>
          </label>
          <br />
          <label htmlFor>
            Método de pagamento:
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <br />
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option>Alimmentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  // walllet: PropTypes.arrayOf(shape({
  //   currencies: PropTypes.array,
  //   expenses: PropTypes.array,
  // })).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(Wallet);
