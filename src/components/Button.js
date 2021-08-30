import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { button, onClick, disabled } = this.props;
    return (
      <div>
        <button
          type="submit"
          onClick={ onClick }
          disabled={ disabled }
        >
          { button }
        </button>
      </div>);
  }
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
