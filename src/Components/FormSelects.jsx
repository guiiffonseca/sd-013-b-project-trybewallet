import React from 'react';
import PropTypes from 'prop-types';

class FormSelects extends React.Component {
  render() {
    const { handleChange, method, tag } = this.props;
    return (
      <form>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select
            name="method"
            id="payment-method"
            value={ method }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag:
          <select
            name="tag"
            id="expense-tag"
            value={ tag }
            onChange={ handleChange }
          >
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

FormSelects.propTypes = {
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default FormSelects;
