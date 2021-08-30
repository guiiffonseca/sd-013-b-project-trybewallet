import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, testId, text, handleChange, name } = this.props;

    return (
      <label htmlFor={ name }>
        <input
          name={ name }
          id={ name }
          type={ type }
          data-testid={ testId }
          onChange={ handleChange }
          placeholder={ text }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
