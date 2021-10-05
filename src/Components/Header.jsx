import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soma: 0,
    };
    this.sum = this.sum.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    if (expenses !== prevProps.expenses) {
      this.sum();
    }
  }

  sum() {
    const { expenses } = this.props;
    const soma = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += value * exchangeRates[currency].ask;
      return acc;
    }, 0);
    this.setState({
      soma: (Math.round(soma * 100) / 100).toFixed(2),
    });
  }

  render() {
    const { email, expenses } = this.props;
    const { soma } = this.state;
    return (
      <header className="App-header">
        <h1 data-testid="email-field">
          { email }
        </h1>
        { expenses && expenses.length
          ? <span data-testid="total-field">{ soma }</span>
          : <span data-testid="total-field">0</span>}
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Array).isRequired,
};

export default connect(mapStateToProps)(Header);
