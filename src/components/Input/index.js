import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      type, name, value, id, dataTestId, placeholder, onChange,
    } = this.props;
    return (
      <div>
        <label htmlFor={ type }>
          <input
            type={ type }
            name={ name }
            value={ value }
            id={ id }
            placeholder={ placeholder }
            data-testeid={ dataTestId }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
