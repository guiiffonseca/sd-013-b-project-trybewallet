import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseInput extends Component {
  render() {
    const { value, description, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="value-input">
          Valor
          <input
            type="number"
            id="value-input"
            name="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="desc-input">
          Descrição
          <input
            type="text"
            id="desc-input"
            name="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

ExpenseInput.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ExpenseInput;
