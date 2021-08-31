import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddExpense from '../components/AddExpense';
import ExpenseBoard from '../components/ExpenseBoard';

import { removeExpenseAction, editExpenseAction } from '../actions';
import Header from '../components/Header';
import EditExpense from '../components/EditExpense';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      editForm: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.editExpense = this.editExpense.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleClick(expense) {
    const { removeExpense } = this.props;
    removeExpense(expense);
  }

  editExpense(expense) {
    const { editExpense } = this.props;
    this.setState({ editForm: true });
    editExpense(expense);
  }

  finishEdit() {
    this.setState({ editForm: false });
  }

  render() {
    const { email, expenses } = this.props;
    const { editForm } = this.state;
    const convertedValue = expenses.map(
      (expense) => expense.value * expense.exchangeRates[expense.currency].ask,
    );
    let total = 0;
    if (convertedValue.length === 0) {
      return (
        <>
          <Header email={ email } total={ total } />
          {editForm ? <EditExpense quitEditForm={ this.finishEdit } /> : <AddExpense />}
          <ExpenseBoard
            expenses={ expenses }
            handleClick={ this.handleClick }
            editExpense={ this.editExpense }
          />
        </>);
    } total = convertedValue.reduce((acc, curr) => acc + curr).toFixed(2);
    return (
      <>
        <Header email={ email } total={ total } />
        {editForm ? <EditExpense quitEditForm={ this.finishEdit } /> : <AddExpense />}
        <ExpenseBoard
          expenses={ expenses }
          handleClick={ this.handleClick }
          editExpense={ this.editExpense }
        />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  user: { email },
  wallet: { expenses },
}) => ({ email, expenses });

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expense) => dispatch(removeExpenseAction(expense)),
  editExpense: (expense) => dispatch(editExpenseAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
