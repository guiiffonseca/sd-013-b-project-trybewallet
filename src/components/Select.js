import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      options,
      labelText,
      name,
      testid,
      value,
      onChange,
    } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { labelText }
        </label>
        <select
          id={ name }
          value={ value }
          name={ name }
          data-testid={ testid }
          onChange={ onChange }
        >
          { options.map((option) => <option key={ option }>{ option }</option>) }
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.isRequired,
  value: PropTypes.isRequired,
  testid: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  testid: '',
};

export default Select;
