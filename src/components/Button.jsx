import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick, type, shouldEnable, text, id } = this.props;
    return (
      <button
        type={ type === 'submit' ? 'submit' : 'button' }
        onClick={ onClick }
        disabled={ shouldEnable }
        id={ id }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  shouldEnable: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
