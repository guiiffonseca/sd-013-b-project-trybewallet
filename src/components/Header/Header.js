import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { total, currency } = this.state;
    const { email } = this.props;
    return (
      <div>
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          {total}
        </div>
        <div data-testid="header-currency-field">
          {currency}
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProp)(Header);
