import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import { getCurrencies as getCurrenciesAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      total: 0,
    };
    this.handleUpdateTotal = this.handleUpdateTotal.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleUpdateTotal(value) {
    const { total } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      total: prevState.total + Number(value),
    }));
    console.log(total);
  }

  render() {
    const { email } = this.props;
    const { currencies, total } = this.state;
    console.log('Total', total);
    return (
      <div>
        <h1>Email:</h1>
        <h2 data-testid="email-field">{email}</h2>
        <h1>Total:</h1>
        <h2 data-testid="total-field">{total}</h2>
        <h1>Currency:</h1>
        <h2 data-testid="header-currency-field">BRL</h2>
        <WalletForm
          currencies={ currencies }
          handleUpdateTotal={ this.handleUpdateTotal }
        />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
