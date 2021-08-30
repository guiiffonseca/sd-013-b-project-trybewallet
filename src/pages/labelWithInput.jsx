import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelWithInput extends Component {
  render() {
    const { value, name, id, type, onChange, valueLabel } = this.props;
    return (
      <label name={ valueLabel } htmlFor={ id }>
        { valueLabel }
        <input
          id={ id }
          value={ value }
          type={ type }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LabelWithInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  valueLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default LabelWithInput;
