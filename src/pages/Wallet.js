import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletFrom from '../component/WalletForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.getValor = this.getValor.bind(this);
  }

  // componentDidMount() {
  //   this.getValor();

  // }

  getValor() {
    const { expenses } = this.props;
    console.log(expenses);
    if (expenses.length === 0) {
      return 0;
    }
    // return expenses.reduce((acc, crr) => console.log(acc) + parseFloat(crr.valor), 0);
    return expenses.map((expense) => expense.valor).reduce((acc, crr) => acc + crr);
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">
            {
              this.getValor()
            }
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
