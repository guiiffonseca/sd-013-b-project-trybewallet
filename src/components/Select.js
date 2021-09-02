import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      name,
      onChange,
      value,
      htmlId,
      createOptions,
    } = this.props;
    return (
      <label htmlFor={ htmlId }>
        Moeda
        <select
          role="combobox"
          aria-label="moeda"
          id={ htmlId }
          onChange={ onChange }
          name={ name }
          value={ value }
        >
          { createOptions() }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlId: PropTypes.string.isRequired,
  createOptions: PropTypes.func.isRequired,
};

export default Select;
