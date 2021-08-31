import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, handleChange, name, testId, text, labelText } = this.props;

    return (
      <label htmlFor={ name }>
        { `${labelText} ` }
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

Input.defaultProps = {
  labelText: '',
  text: '',
  testId: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  testId: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
};

export default Input;
