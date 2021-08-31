import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelWithselect extends Component {
  render() {
    const { id, valueLabel, options, value, onChange, name } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          { valueLabel }
          <select name={ name } value={ value } id={ id } onChange={ onChange }>
            {options.map((string, index) => (
              <option key={ index } value={ string }>{ string }</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

LabelWithselect.propTypes = {
  id: PropTypes.string.isRequired,
  valueLabel: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default LabelWithselect;
