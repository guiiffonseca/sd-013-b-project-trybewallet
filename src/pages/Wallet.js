import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletFrom from '../component/WalletForm';

class Wallet extends React.Component {
  constructor() {
    super();
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, currencies, expenses } = this.props;
    console.log(currencies);
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">
            {
              expenses.length <= 0 ? 0
                : expenses.reduce((acc, curr) => acc + curr)
            }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <WalletFrom />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.shape.isRequired,
  expenses: PropTypes.shape.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
