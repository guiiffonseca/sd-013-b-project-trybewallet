import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      label,
      name,
      testid,
      inputType,
      inputPlaceholder,
      onChange,
      value,
    } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
        </label>
        <input
          id={ name }
          name={ name }
          data-testid={ testid }
          type={ inputType }
          placeholder={ inputPlaceholder }
          onChange={ onChange }
          value={ value }
        />
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  testid: '',
};

export default Input;
