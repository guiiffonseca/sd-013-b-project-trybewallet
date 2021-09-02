import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  async componentDidMount() {
    const { currency } = this.props;
    currency();
  }

  render() {
    return (
      <>
        <Header />
        <ExpenseForm />
      </>
    );
  }
}

const mapStateToProps = (state) => ({ userState: state.user.email });

const mapDispatchToProps = (dispatch) => ({
  currency: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  currency: PropTypes.objectOf().isRequired,
};
