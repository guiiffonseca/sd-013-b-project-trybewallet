import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.sum = this.sum.bind(this);
  }

  // rodrigo augusto //
  sum() {
    const { expenses } = this.props;
    let soma = 0;
    // Eduardo luis
    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    });
    return soma.toFixed(2);
  }

  render() {
    const { email } = this.props;
    // const { expenses } = this.state;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ this.sum() }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Headers.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

// pegando do storage
export default connect(mapStateToProps)(Headers);
