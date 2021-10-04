import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTag extends Component {
  render() {
    const { tag, onChange } = this.props;

    return (
      <label htmlFor="tag">
        Tag:
        {' '}
        <select
          id="tag"
          className="expensives-form-long-inputs"
          name="tag"
          value={ tag }
          onChange={ onChange }
        >
          <option value="">Selecione</option>
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

SelectTag.propTypes = ({
  handleChange: PropTypes.func,
}).isRequired;

export default SelectTag;
