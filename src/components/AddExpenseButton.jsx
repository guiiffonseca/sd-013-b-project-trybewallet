import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddExpenseButton extends Component {
  render() {
    const { handleClick, content } = this.props;
    return (
      <button type="button" onClick={ handleClick }>{ content }</button>
    );
  }
}

export default AddExpenseButton;

AddExpenseButton.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
