import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainForm from '../components/MainForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.totalSum = this.totalSum.bind(this);
    this.state = {
      // value:'',
    };
  }

  totalSum() {
    const { expenses } = this.props;
    console.log(expenses);
    return expenses.reduce((total, { value, exchangeRates, currency }) => {
      const sum = Number(value) * exchangeRates[currency].ask;
      return total + sum;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">{this.totalSum()}</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <MainForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
