import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValueForm extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="value-field">
        Valor
        <input
          type="number"
          name="value"
          id="value-field"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputValueForm.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputValueForm;
