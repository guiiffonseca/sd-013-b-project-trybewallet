import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      labelText, type, name, value, id, dataTestId, placeholder, onChange,
    } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          {labelText}
          <input
            type={ type }
            name={ name }
            value={ value }
            id={ id }
            placeholder={ placeholder }
            data-testid={ dataTestId }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  dataTestId: '',
  placeholder: '',
  labelText: '',
};

export default Input;
