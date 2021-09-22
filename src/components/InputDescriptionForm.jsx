import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescriptionForm extends Component {
  render() {
    const { description, handleChange } = this.props;

    return (
      <label htmlFor="describe-field">
        Descrição
        <textarea
          name="description"
          id="describe-field"
          cols="30"
          rows="1"
          value={ description }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputDescriptionForm.propTypes = {
  description: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputDescriptionForm;
