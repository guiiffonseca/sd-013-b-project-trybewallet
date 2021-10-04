import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  showExpenses() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, expense) => {
      let soma = acc;
      console.log(expense);
      soma += +expense.value * expense.exchangeRates[expense.currency].ask;
      return soma;
    }, 0);
    return total;
  }

  render() {
    const { email } = this.props;
    return (
      <div className="header">
        <span data-testid="email-field" className="email">{ email }</span>
        <span data-testid="total-field">{ this.showExpenses() }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
