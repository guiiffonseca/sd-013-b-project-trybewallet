import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form';

class HeaderForm extends React.Component {
  render() {
    const { loading, edit, expenseToEdit } = this.props;
    return (
      <form>
        { !loading && !edit && <Form /> }
        { !loading && edit && <Form expenseToEdit={ expenseToEdit } /> }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading.isFatching,
  edit: state.editExpense.edit,
  expenseToEdit: state.editExpense.expense,
});

HeaderForm.defaultProps = {
  expenseToEdit: {},
};

HeaderForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  expenseToEdit: PropTypes.objectOf(PropTypes.any),
};

export default connect(mapStateToProps, null)(HeaderForm);
