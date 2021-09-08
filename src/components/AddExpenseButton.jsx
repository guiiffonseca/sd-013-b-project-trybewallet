import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddExpense extends Component {
  render() {
    const { onclick } = this.props;
    return (
      <button
        type="button"
        onClick={ onclick }
      >
        Adicionar despesa
      </button>
    );
  }
}

AddExpense.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddExpense;
