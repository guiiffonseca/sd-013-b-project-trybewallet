import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type,
      name,
      label,
      onChange,
      value,
      id,
      placeholder,
      dataTestid,
    } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <input
          placeholder={ placeholder }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  dataTestid: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  placeholder: '',
  onChange: null,
};

export default Input;
