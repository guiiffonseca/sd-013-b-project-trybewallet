import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <label htmlFor="payment">
          Método de pagamento:
          <select
            name="payment"
            id="payment"
            onChange={ onChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            name="tag"
            id="tag"
            onChange={ onChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte e Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Select;
