import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTag extends Component {
  render() {
    const {
      name,
      onChange,
      value,
      htmlId,
    } = this.props;
    return (
      <label htmlFor={ htmlId }>
        Tag
        <select
          id={ htmlId }
          onChange={ onChange }
          name={ name }
          value={ value }
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

SelectTag.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlId: PropTypes.string.isRequired,
};

export default SelectTag;
