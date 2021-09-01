import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { setclass, textButton, onclick } = this.props;
    return (
      <button
        className={ setclass }
        type="button"
        onClick={ onclick }
      >
        <p>{ textButton }</p>
      </button>
    );
  }
}

Button.propTypes = {
  setclass: PropTypes.string,
  onclick: PropTypes.func,
  textButton: PropTypes.string,
}.isRequired;

export default Button;
