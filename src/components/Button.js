import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { text, active, onClick } = this.props;
    return (
      <button
        onClick={ onClick }
        type="button"
        disabled={ active ? 'disabled' : undefined }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
