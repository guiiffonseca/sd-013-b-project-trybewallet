import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { text } = this.props;
    return (
      <button type="button">{ text }</button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
