import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // value: 0,
      // currency: 'BRL',
    };
  }

  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce(
      (accumulator, { value, exchangeRates, currency }) => (
        accumulator + Number(value) * Number(exchangeRates[currency].ask)
      ),
      0,
    );

    return (
      <div>
        <header>
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">{`Gastos: ${total}`}</h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </header>
        <AddExpense />
        <WalletTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
