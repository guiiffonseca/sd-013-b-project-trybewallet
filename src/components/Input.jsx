import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      placeholder,
      type,
      name,
      label,
      onChange,
      value,
      id,
      datatestid,
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
          data-testid={ datatestid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  datatestid: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  label: '',
  value: '',
  name: '',
  id: '',
  datatestid: '',
  onChange: null,
};

export default Input;
