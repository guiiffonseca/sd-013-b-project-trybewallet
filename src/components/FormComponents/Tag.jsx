import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="tag">
          Tag:
          <select name="tag" value={ tag } onChange={ handleChange } id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Tag.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
