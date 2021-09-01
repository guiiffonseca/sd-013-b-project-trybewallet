import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, handleClick, status, testId } = this.props;
    return (
      <button
        type="button"
        onClick={ handleClick }
        disabled={ status }
        data-testid={ testId }
      >
        { text }
      </button>
    );
  }
}

Button.defaultProps = {
  status: false,
  testId: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  status: PropTypes.bool,
  testId: PropTypes.string,
};

export default Button;
