import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, handleClick, status } = this.props;
    return (
      <button
        type="button"
        onClick={ handleClick }
        disabled={ status }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Button;
