import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTagForm extends Component {
  render() {
    const { tag, handleChange } = this.props;

    return (
      <label htmlFor="select-tag">
        Tag
        <select
          id="select-tag"
          name="tag"
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
    );
  }
}

SelectTagForm.propTypes = {
  tag: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SelectTagForm;
