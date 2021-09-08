import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.sumTotal = this.sumTotal.bind(this);
  }

  sumTotal(expenses) {
    return expenses.reduce((acc, { value, exchangeRates, currency }) => (
      acc + value * parseFloat(exchangeRates[currency].ask)
    ), 0);
  }

  render() {
    const { email, expenses } = this.props;
    const total = this.sumTotal(expenses);
    return (
      <div className="header">
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { total }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
