import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTag extends Component {
  render() {
    const { onchange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" onChange={ onchange }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

export default SelectTag;

SelectTag.propTypes = {
  onchange: PropTypes.func.isRequired,
};
