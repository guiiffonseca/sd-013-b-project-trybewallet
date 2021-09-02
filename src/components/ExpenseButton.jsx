import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesButton extends Component {
  render() {
    const { handle } = this.props;
    return (
      <button type="button" name="adicionar despesa" onClick={ handle }>
        Adicionar despesa
      </button>
    );
  }
}

ExpensesButton.propTypes = {
  handle: PropTypes.func,
}.isRequired;

export default ExpensesButton;
