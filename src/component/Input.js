import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, name, value, onChange, id, type } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <input
          name={ name }
          value={ value }
          data-testid={ id }
          type={ type }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

};

export default Input;
