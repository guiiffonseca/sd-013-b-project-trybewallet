import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NewExpense from '../components/NewExpense';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <Header
          email={ email }
          total={ 0 }
          currency="BRL"
        />
        <NewExpense />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
