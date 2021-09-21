import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user: { email }, wallet: { expenses } } = this.props;
    let totalExpenses = 0;
    expenses.forEach((expense) => {
      const { value, currency, exchangeRates } = expense;
      totalExpenses += value * exchangeRates[currency].ask;
    });
    return (
      <header className="header">
        <div className="left-header">
          <h1 className="left-header">TRYBE</h1>
        </div>
        <div className="right-header">
          <span className="span" data-testid="email-field">
            { `Email: ${email}` }
          </span>
          <span className="span" data-testid="total-field">
            { `Despesa Total: R$ ${totalExpenses || 0}`}
          </span>
          <span className="span" data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  despesa: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(Header);
