import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FormDespesas extends Component {
  render() {
    const { moedas } = this.props;
    const arrayMoedas = Object.entries(moedas);
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input type="text" id="descrição" name="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            {arrayMoedas.map((moeda) => (
              moeda[0] === 'USDT' ? null
                : <option key={ moeda[0] } value={ moeda[0] }>{moeda[0]}</option>
            ))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento" id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
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

FormDespesas.propTypes = {
  moedas: PropTypes.shape(PropTypes.object).isRequired,
};

export default FormDespesas;
