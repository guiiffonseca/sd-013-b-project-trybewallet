import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputId, testId, type, onChange, labelText } = this.props;
    return (
      <div>
        <label htmlFor={ inputId }>{labelText}</label>
        <input
          data-testid={ testId }
          id={ inputId }
          type={ type }
          onChange={ onChange }
          required
          minLength="6"
        />
      </div>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
