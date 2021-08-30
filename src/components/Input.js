import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, holderText, dataText, minLength, name, onChange, value } = this.props;
    return (
      <input
        onChange={ onChange }
        name={ name }
        minLength={ minLength }
        data-testid={ dataText }
        type={ type }
        placeholder={ holderText }
        value={ value }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  holderText: PropTypes.string.isRequired,
  dataText: PropTypes.string.isRequired,
  minLength: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
