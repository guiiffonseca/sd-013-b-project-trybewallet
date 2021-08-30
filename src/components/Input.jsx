import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { name,
      type, id,
      onChange, value,
      placeholder, testId } = this.props;
    return (
      <label htmlFor={ id }>
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ testId }
          onChange={ onChange }
          value={ value }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string,
};

Input.defaultProps = {
  testId: '',
};
