import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, value, label, name, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            type={ type }
            name={ name }
            data-testid={ `${name}-input` }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
