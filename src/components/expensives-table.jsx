import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchCurrenciesThunk, fetchExpensesThunk } from '../actions';
// import AddButton from './buttons';

class ExpensesTable extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = LOCAL_STATE;
  // }

  // componentDidMount() {
  // }

  // renderSubmitButton() {
  //   const { value, method, tag } = this.state;

  //   return (
  //     <AddButton
  //       className="expensives-form-long-inputs"
  //       name="Adicionar despesa"
  //       disabled={ value === '' || method === '' || tag === '' }
  //       onClick={ (event) => this.onClick(event) }
  //     />
  //   );
  // }

  render() {
    // const { value, description, currency, method, tag } = this.state;

    return (
      <table />
    );
  }
}

ExpensesTable.propTypes = {
  // dispatchSetCurrencies: PropTypes.func,
}.isRequired;

// const mapStateToProps = (state) => ({

// });

// const mapDispatchToProps = (dispatch) => ({
//   dispatchSetCurrencies: () => dispatch(fetchCurrenciesThunk()),
//   dispatchAddExpense: (localState) => dispatch(fetchExpensesThunk(localState)),
// });

// export default connect(mapStateToProps /* , mapDispatchToProps */)(ExpensesTable);
export default ExpensesTable;
