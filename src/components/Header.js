import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  sumExchange() {
    const { expenses } = this.props;
    const totalValue = expenses.reduce((acc, { value, exchangeRates, currency }) => (
      (acc + Number(value) * exchangeRates[currency].ask)), 0).toFixed(2);
    return totalValue;
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <span data-testid="email-field">{ user }</span>
        <span data-testid="total-field">{ this.sumExchange() }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  user: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
