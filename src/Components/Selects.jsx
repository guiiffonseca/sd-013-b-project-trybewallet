import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Selects extends Component {
  render() {
    const { handleChange, moedas, currency, tag, method } = this.props;
    return (
      <div>
        <label htmlFor="currency-input">
          Moeda
          <select
            onChange={ handleChange }
            name="currency"
            id="currency-input"
            value={ currency }
          >
            {moedas.map((coin) => (
              <option key={ coin } value={ coin }>{coin}</option>
            ))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            onChange={ handleChange }
            name="method"
            id="pagamento"
            value={ method }
          >
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ handleChange } name="tag" id="tag" value={ tag }>
            <option value="Alimentação"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.moedas,
});

Selects.propTypes = {
  handleChange: PropTypes.func,
  moedas: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, null)(Selects);
