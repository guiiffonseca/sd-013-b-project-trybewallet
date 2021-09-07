import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cambio: 'BRL',
      gastoTotal: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { cambio, gastoTotal } = this.state;
    return (
      <>
        <div>
          Trybe Wallet
        </div>
        <div>
          <p data-testid="email-field">{ `Usuario: ${email}` }</p>
          <p data-testid="header-currency-field">{ `Cambio: ${cambio}` }</p>
          <p data-testid="total-field">{ `Gasto Total: ${gastoTotal}` }</p>
        </div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input type="text" id="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select type="region" id="moeda">
              <option value="vazio">vazio</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </>
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
