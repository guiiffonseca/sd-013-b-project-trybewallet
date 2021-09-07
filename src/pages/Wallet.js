import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletFrom from '../component/WalletForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.getValor = this.getValor.bind(this);
  }

  componentDidMount() {
    this.getValor();
  }

  getValor() {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      return 0;
    }
    // return expenses.reduce((acc, crr) => console.log(acc) + parseFloat(crr.valor), 0);
    // oque me ajudou a passaro no 8 foi o rp do marcos rodrigues
    // https://github.com/tryber/sd-013-b-project-trybewallet/pull/41/commits/b45664822ac2d38bc98afebeb21d5bcd4895b7dc
    const reduce = expenses.reduce((acc, crr) => {
      const subTotal = crr.value * crr.exchangeRates[crr.currency].ask;
      acc += subTotal;
      return acc;
    }, 0);
    return parseFloat(reduce).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">
            { this.getValor() }
          </span>
          <span data-testid="header-currency-field">
            {/* {currencies.length <= 0 ? 'BRL' : currencies} */}
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
  expenses: PropTypes.arrayOf(PropTypes.shape({ map: PropTypes.func })).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
