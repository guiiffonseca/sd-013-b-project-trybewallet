import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { buttonText, onClick, disabled, testid } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ onClick }
          disabled={ disabled }
          data-testid={ testid }
        >
          { buttonText }
        </button>
      </div>);
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  testid: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  testid: '',
};

export default Button;
