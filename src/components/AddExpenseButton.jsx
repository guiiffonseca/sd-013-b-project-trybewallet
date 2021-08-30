import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddExpenseButton extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button type="button" onClick={ handleClick }>Adicionar despesa</button>
    );
  }
}

export default AddExpenseButton;

AddExpenseButton.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
