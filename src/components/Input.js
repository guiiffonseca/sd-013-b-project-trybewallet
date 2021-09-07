import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, name, value, id, func } = this.props;
    return (
      <input type={ type } name={ name } value={ value } id={ id } onChange={ func } />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
