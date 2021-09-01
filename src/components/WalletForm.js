import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="number" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            { currencies.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, null)(WalletForm);
