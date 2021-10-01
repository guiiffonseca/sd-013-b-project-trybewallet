import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesThunk } from '../actions';
import Header from '../components/header';
import ExpensesForm from '../components/expenses-form';

class Wallet extends Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    // const { isFetchingStatus } = this.props;

    return (
      // isFetchingStatus ? <p>Loading</p> : (
      <div>
        <Header />
        <ExpensesForm />
      </div>
    );
    // );
  }
}

Wallet.propTypes = {
  isFetchingStatus: PropTypes.bool,
  setCurrencies: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  isFetchingStatus: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
