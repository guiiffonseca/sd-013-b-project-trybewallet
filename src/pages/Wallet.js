import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { value, currency } = this.state;
    const { email } = this.props;

    return (
      <div>
        <header>
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">{`Gastos: ${value}`}</h2>
          <h2 data-testid="header-currency-field">{`Câmbio: ${currency}`}</h2>
        </header>
        <AddExpense />
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
