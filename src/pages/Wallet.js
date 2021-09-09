import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpensesForm from '../components/ExpensesForm';

class Wallet extends React.Component {
  render() {
    const { email, total } = this.props;

    return (
      <div>
        <header>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">{`Total: ${total}`}</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <ExpensesForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expensesTotal,
});

export default connect(mapStateToProps, null)(Wallet);
