import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpense from '../components/AddExpense';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            0
            {' '}
            <span data-testid="header-currency-field">BRL</span>
            {' '}
          </p>
        </header>
        <AddExpense />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user: { email } }) => ({ email });

export default connect(mapStateToProps, null)(Wallet);
