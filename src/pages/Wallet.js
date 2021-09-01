import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ `Email: ${email}` }</p>
          <p data-testid="total-field">Despesa: 0</p>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
        </header>
        <form>
          <label htmlFor="input-valor">
            Valor
            <input type="number" name="valor" id="input-valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <textarea id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {/* <option>0</option> */}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="despesa-tipo">
            Tag
            <select id="despesa-tipo">
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
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
