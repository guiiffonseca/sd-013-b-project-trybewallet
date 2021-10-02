import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { price } from '../../functions';
import '../../styles/Wallet.css';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const totalSummation = price(expenses);
    return (
      <div>
        <h1 className="header">TrybeWallet</h1>
        <span data-testid="email-field">{email}</span>
        <span
          id="total-expenses"
          data-testid="total-field"
        >
          {totalSummation}
        </span>
        <span data-testid="header-currency-field"> BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
