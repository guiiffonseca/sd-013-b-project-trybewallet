import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    delete currencies.USDT;
    const arrayObjctCurrencies = Object.values(currencies);
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          <input type="number" name="Valor" id="Valor" />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input type="text" name="Descrição" id="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select name="Moeda" id="Moeda">
            { arrayObjctCurrencies.map((currencie, index) => (
              <option key={ index }>{currencie.code}</option>
            ))}
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select name="Método de pagamento" id="Método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select name="Tag" id="Tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

Form.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Form);
