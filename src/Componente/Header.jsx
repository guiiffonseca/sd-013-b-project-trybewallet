import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
/* constructor() {
    super();

    this.addValueTotal = this.addValueTotal.bind(this);
  } */

  /* addValueTotal() {
    const { expenses } = this.props;
    let cont = 0;
    if (expenses.length > 0) {
      expenses.forEach(({ value, currency, exchangeRates }) => {
        cont += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
      });
    }
    return cont.toFixed(2);
  } */

  render() {
    const { expenses } = this.props;
    const { email } = this.props;
    let cont = 0;

    expenses.forEach(({ value, currency, exchangeRates }) => {
      console.log(expenses);
      cont += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    });

    return (
      <header className="header">
        <div>
          <h1>TrybeWallet</h1>
          <h5 data-testid="email-field">
            Email:
            { email }
          </h5>
        </div>
        <div className="moedaTotal">
          <h5 data-testid="total-field">{ `Despesa Total: R$ ${cont.toFixed(2)}` }</h5>
          <h5 data-testid="header-currency-field">BRL</h5>
        </div>

      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,

});

export default connect(mapStateToProps)(Header);
