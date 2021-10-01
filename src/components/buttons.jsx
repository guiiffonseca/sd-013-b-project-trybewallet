import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  render() {
    const { name, onClick, disable } = this.props;
    return (
      <button
        className="expensives-form-long-inputs"
        type="button"
        onClick={ onClick }
        disabled={ disable }
      >
        {name}
      </button>
    );
  }
}

AddButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
}.isRequired;

export default AddButton;
