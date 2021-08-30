import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Input label="Valor" id="valor" name="valor" type="number" />
        <Input label="descrição" id="descricao" name="descricao" type="text" />
        <form>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              <option>Moeda</option>
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select name="method" id="method">
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
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Wallet);
