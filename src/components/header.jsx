import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.sumTotalExpenses = this.sumTotalExpenses.bind(this);
  }

  sumTotalExpenses() {
    const { expenses } = this.props;
    let sumValues = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      sumValues += parseFloat(value) * exchangeRates[currency].ask;
    });
    return sumValues.toFixed(2);
  }

  render() {
    const { email } = this.props;
    const totalExpenses = this.sumTotalExpenses();

    return (
      <header className="header-container">
        <section>Trybe Wallet</section>
        <section data-testid="email-field">{`Email: ${email}`}</section>
        <section data-testid="total-field">{`Despesa Total: ${totalExpenses}`}</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }
}

Header.propTypes = ({
  email: PropTypes.string,
  expenses: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  ),
}).isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
