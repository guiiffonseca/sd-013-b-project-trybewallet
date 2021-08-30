import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p>
          Despesa Total: R$
          <span data-testid="total-field">
            { expenses.reduce((acc, { value, currency, exchangeRates }) => {
              acc += parseFloat(value * exchangeRates[currency].ask);
              return parseFloat(acc.toFixed(2));
            }, 0)}
          </span>
          <span data-testid="header-currency-field"> BRL</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
}.isRequeride;
