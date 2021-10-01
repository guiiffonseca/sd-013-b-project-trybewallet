import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header.css';

const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  fetchAPI() {
    return ENDPOINT;
  }

  showExpenses() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, value) => {
      let soma = acc;
      soma += value;
      return soma;
    }, 0);
    return total;
  }

  showCurrencies() {
    const { currencies } = this.props;
    return currencies[0];
  }

  render() {
    const { email } = this.props;
    return (
      <div className="header">
        <span data-testid="email-field" className="email">{ email }</span>
        <span data-testid="total-field">{ this.showExpenses() }</span>
        <span data-testid="header-currency-field">{ this.showCurrencies() }</span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(Header);
