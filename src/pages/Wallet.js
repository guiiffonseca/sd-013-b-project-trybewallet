import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddExpenseBar from '../components/AddExpenseBar';
import Header from '../components/Header';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpenseBar />
        <ExpensesTable />
      </div>
    );
  }
}
const mapStateToProps = ({ edit: { isEditing } }) => ({
  isEditing,
});

export default connect(mapStateToProps)(Wallet);
