import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      name,
      onChange,
      value,
      htmlId,
      labelText,
    } = this.props;
    return (
      <label htmlFor={ htmlId }>
        { labelText }
        <textarea
          id={ htmlId }
          onChange={ onChange }
          name={ name }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default Input;
