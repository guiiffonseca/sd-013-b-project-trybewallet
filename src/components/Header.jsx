import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './Header.css';
import wallet from '../wallet.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.sumTotalExpenses = this.sumTotalExpenses.bind(this);
  }

  sumTotalExpenses() {
    const { expensesList } = this.props;
    expensesList.reduce((acc, { value }) => acc + value, 0);
  }

  render() {
    const { currentEmail } = this.props;

    const totalExpenses = this.sumTotalExpenses();

    return (
      <div className="header">
        <img src={ wallet } alt="wallet logo" />
        <div className="flex">
          <p>Currency:</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
        <div className="flex">
          <p>Total expenses:</p>
          <p data-testid="total-field">0</p>
        </div>
        <div className="flex">
          <p>Logged in:</p>
          <p data-testid="email-field">{ currentEmail }</p>
        </div>
        <div className="flex">
          <p>Total Expenses</p>
          <p data-testid="total-field">
            {
              totalExpenses
            }
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentEmail: state.user.email,
  expensesList: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  currentEmail: PropTypes.string.isRequired,
  expensesList: PropTypes.number.isRequired,
};
