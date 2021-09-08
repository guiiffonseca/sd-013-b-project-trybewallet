import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTag extends Component {
  render() {
    const { onchange, tag } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          onChange={ onchange }
          value={ tag }
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

export default SelectTag;

SelectTag.propTypes = {
  onchange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
