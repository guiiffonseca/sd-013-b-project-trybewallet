import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      type,
      holderText,
      dataText,
      minLength,
      name,
      onChange,
      value,
      htmlId,
      labelText,
    } = this.props;
    return (
      <label htmlFor={ htmlId }>
        { labelText }
        <input
          id={ htmlId }
          onChange={ onChange }
          name={ name }
          minLength={ minLength }
          data-testid={ dataText }
          type={ type }
          placeholder={ holderText }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  holderText: PropTypes.string,
  dataText: PropTypes.string,
  minLength: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

Input.defaultProps = {
  holderText: '',
  minLength: '',
  dataText: '',
};

export default Input;
