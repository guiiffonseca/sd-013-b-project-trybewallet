import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { type, label, id, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          type={ type }
          name={ id }
          id={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
