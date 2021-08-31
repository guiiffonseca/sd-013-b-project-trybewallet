// Retirado do exercício da aula 16.3
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      label,
      name,
      onChange,
      value,
      id,
      // defaultOption,
      // defaultValue,
      options,
    } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select
          name={ name }
          id={ id }
          onChange={ onChange }
          value={ value }
        >
          {/* <option value={ defaultValue }>{ defaultOption }</option> */}
          {
            options.map((option, index) => (
              <option key={ index } value={ option }>{ option }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  // defaultValue: PropTypes.string.isRequired,
  // defaultOption: PropTypes.string.isRequired,
};

export default Select;
