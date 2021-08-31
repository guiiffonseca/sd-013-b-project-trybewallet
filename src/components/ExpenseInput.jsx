import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseInput extends Component {
  render() {
    const { labelContent, type, name, handleChange, value } = this.props;
    return (
      <label htmlFor={ name }>
        { labelContent }
        <input
          placeholder={ value }
          type={ type }
          name={ name }
          id={ name }
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

export default ExpenseInput;

ExpenseInput.propTypes = {
  labelContent: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
