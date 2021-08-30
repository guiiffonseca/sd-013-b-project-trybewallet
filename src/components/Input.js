import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, holderText, dataText } = this.props;
    return (
      <input data-testid={ dataText } type={ type } placeholder={ holderText } />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  holderText: PropTypes.string.isRequired,
  dataText: PropTypes.string.isRequired,
};

export default Input;
