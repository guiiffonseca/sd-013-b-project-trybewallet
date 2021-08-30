import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, id, label, testid } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          data-testid={ testid }
          type={ type }
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  testid: '',
};
