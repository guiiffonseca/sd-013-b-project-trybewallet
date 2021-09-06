import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    let expensesTotalPrice = 0;
    if (expenses.length > 0) {
      expenses.forEach((expense) => {
        if (expense.exchangeRates.USD !== undefined) {
          const { value } = expense;
          const positionOfTargetExchange = expense.currency;
          const rate = expense.exchangeRates[positionOfTargetExchange].ask;
          const integerValue = rate * value;
          expensesTotalPrice += integerValue;
        }
      });
    }

    return (
      <header>
        <h2
          data-testid="email-field"
        >
          {email}
        </h2>
        <h2
          data-testid="total-field"
        >
          R$
          {expensesTotalPrice.toFixed(2)}
        </h2>
        <h2
          data-testid="header-currency-field"
        >
          BRL
        </h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
