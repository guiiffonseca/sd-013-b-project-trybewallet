import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{userEmail}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <div>
          <form>
            <label htmlFor="valor">
              Valor
              <input type="number" name="valor" id="valor" />
            </label>
            <label htmlFor="describe">
              Descrição
              <input type="text" name="describe" id="describe" />
            </label>
            <label htmlFor="moeda">
              Moeda
              <select name="moeda" id="moeda">
                moedas
              </select>
            </label>
            <label htmlFor="metodo-pagamento">
              Método de pagamento
              <select name="metodo-pagamento" id="metodo-pagamento">
                <option value="dinheiro">Dinheiro</option>
                <option value="credito">Cartão de crédito</option>
                <option value="debito">Cartão de débito</option>
              </select>
            </label>
            <label htmlFor="categoria">
              Tag
              <select name="categoria" id="categoria">
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Transporte">Transporte</option>
                <option value="Saúde">Saúde</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
