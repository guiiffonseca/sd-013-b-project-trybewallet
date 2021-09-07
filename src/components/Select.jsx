import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { name, label, onChange, options } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select
          id={ name }
          name={ name }
          onChange={ onChange }
        >
          {options.map((option) => (
            <option key={ option } value={ option }>
              { option }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  options: [],
};
