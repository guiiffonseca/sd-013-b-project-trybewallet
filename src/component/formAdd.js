import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormAdd extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form className="formAdd">
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" />
        </label>
        <label htmlFor="describe">
          descrição:
          <textarea id="describe" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {
              Object.keys(currencies)
                .filter((currencyToFilter) => currencyToFilter !== 'USDT')
                .map((currency) => (<option key={ currency }>{ currency }</option>))
            }
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select id="paymentMethod">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag:
          <select id="category">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

FormAdd.propTypes = {
  currencies: PropTypes.string.isRequired,
};

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

export default connect(mapStateToProps)(FormAdd);
