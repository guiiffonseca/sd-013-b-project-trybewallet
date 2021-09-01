import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMethod extends Component {
  render() {
    const {
      name,
      onChange,
      value,
      htmlId,
    } = this.props;
    return (
      <label htmlFor={ htmlId }>
        Método de pagamento
        <select
          id={ htmlId }
          onChange={ onChange }
          name={ name }
          value={ value }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectMethod.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlId: PropTypes.string.isRequired,
};

export default SelectMethod;
