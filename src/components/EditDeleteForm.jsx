import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense as deleteExpenseAction } from '../actions';

class EditDeleteForm extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { deleteExpense, id } = this.props;
    deleteExpense(id);
  }

  render() {
    return (
      <div>
        <span>Editar</span>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ this.handleClick }
        >
          Exluir
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (state) => dispatch(deleteExpenseAction(state)),
});

EditDeleteForm.propTypes = {
  deleteExpense: PropTypes.func,
  id: PropTypes.number,
}.isRequired;

export default connect(null, mapDispatchToProps)(EditDeleteForm);
