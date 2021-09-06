import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoedas } from '../actions';

class Forms extends Component {
  componentDidMount() {
    const { apiFetchMoedasProps } = this.props;
    apiFetchMoedasProps();
  }

  render() {
    const { moedas } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="despesa">
          Descrição
          <input type="text" id="despesa" />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select name="currency" id="currency-input">
            {moedas.map((coin) => (
              <option key={ coin } value={ coin }>{coin}</option>
            ))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" id="pagamento">
            <option value="dinheiro"> Dinheiro </option>
            <option value="credito"> Cartão de crédito </option>
            <option value="debito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="alimentacao"> Alimentação </option>
            <option value="lazer"> Lazer </option>
            <option value="trabalho"> Trabalho </option>
            <option value="transporte"> Transporte </option>
            <option value="saude"> Saúde </option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.moedas,
});

const mapDispatchToProps = (dispatch) => ({
  apiFetchMoedasProps: () => dispatch(fetchMoedas()),
});

Forms.propTypes = {
  apiFetchMoedasProps: PropTypes.func,
  moedas: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
