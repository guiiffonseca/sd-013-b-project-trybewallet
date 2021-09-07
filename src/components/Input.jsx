import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, value, onChange, name, label } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ type }
          value={ value }
          name={ name }
          id={ name }
          onChange={ onChange }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
