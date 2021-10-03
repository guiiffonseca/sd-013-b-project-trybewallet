import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const { currency } = this.state;
    const { email, expenses } = this.props;
    return (
      <div>
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          {expenses.reduce((acc, curr) => {
            const conversion = Number(curr.exchangeRates[curr.currency].ask);
            const expense = curr.value;
            return acc + (expense * conversion);
          }, 0)}
        </div>
        <div data-testid="header-currency-field">
          {currency}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProp = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProp)(Header);
