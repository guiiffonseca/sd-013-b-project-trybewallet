import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { correctCurrency, handChang } = this.props;
    return (
      <form>
        <label htmlFor>
          Valor
          <input type="number" name="value" onChange={ handChang } />
        </label>
        <label htmlFor>
          Descrição
          <input type="text" name="description" onChange={ handChang } />
        </label>
        <label htmlFor>
          Moeda
          <select name="currency" onChange={ handChang }>
            {Object.keys(correctCurrency).map((element, index) => (
              <option key={ index }>{element}</option>
            ))}
          </select>
        </label>
        <label htmlFor>
          Método de pagamento
          <select name="method" onChange={ handChang }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor>
          Tag
          <select name="tag" onChange={ handChang }>
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

Form.propTypes = {
  handChang: PropTypes.func.isRequired,
  correctCurrency: PropTypes.string.isRequired,
};

export default Form;
