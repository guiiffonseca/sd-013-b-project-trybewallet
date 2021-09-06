import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  totalExpenses() {
    const { expenses } = this.props;

    const total = expenses.reduce((accumulator, item) => (
      accumulator + (item.value * item.exchangeRates[item.currency].ask)
    ), 0);

    return Math.round(total * 100) / 100;
  }

  render() {
    const { logedEmail } = this.props;

    return (
      <header className="header">
        <div>
          TRYBE
        </div>

        <div className="header-infos">
          <div>
            <strong>Email: </strong>
            <span data-testid="email-field">{ logedEmail }</span>
          </div>

          <div>
            <strong>Despesa Total: </strong>
            <span data-testid="total-field">{ this.totalExpenses() }</span>
            <span data-testid="header-currency-field"> BRL</span>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  logedEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  logedEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
