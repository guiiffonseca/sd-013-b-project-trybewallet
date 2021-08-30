import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, text, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name } name={ name } value={ value } onChange={ onChange }>
        {text}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
