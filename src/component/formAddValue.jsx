import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormAddValue extends Component {
  render() {
    const { currenciesState } = this.props;
    const currencies = Object.keys(currenciesState);
    const currenciesFilter = currencies.filter((value) => value !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor:
          {' '}
          <input type="number" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          {' '}
          <input type="text" id="description" />
        </label>
        <label htmlFor="coin">
          Moeda:
          {' '}
          <select id="coin">
            {currenciesFilter.map((value) => (
              <option value={ value } key={ value }>
                { value }
                {' '}
              </option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          {' '}
          <select id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          {' '}
          <select id="tag">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

FormAddValue.propTypes = {
  currenciesState: PropTypes.arrayOf,
};

FormAddValue.defaultProps = {
  currenciesState: {},
};

const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies,
});

export default connect(mapStateToProps)(FormAddValue);
