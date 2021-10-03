import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  render() {
    const { className, disabled, onClick, name } = this.props;
    return (
      <button
        className={ className }
        type="button"
        disabled={ disabled }
        onClick={ onClick }
      >
        {name}
      </button>
    );
  }
}

AddButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string,
}.isRequired;

export default AddButton;
