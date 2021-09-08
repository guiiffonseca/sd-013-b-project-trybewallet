import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { labelText, value, name, id, onChange, options } = this.props;

    const newOptions = options.map((option) => (
      <option
        value={ option }
        key={ option }
      >
        { option }
      </option>
    ));

    return (
      <label htmlFor={ name }>
        {labelText}
        <select
          value={ value }
          name={ name }
          onChange={ onChange }
          id={ id }
        >
          {newOptions}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
