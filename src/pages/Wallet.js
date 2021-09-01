import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletHeader from '../Components/WalletHeader';
import WalletForm from '../Components/WalletForm';
import WalletTable from '../Components/WalletTable';
import { defineCurrencys as defineCurrencysAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      actualCurrency: 'BRL',
    };
  }

  componentDidMount() {
    const { defineCurrencys } = this.props;
    defineCurrencys();
  }

  render() {
    const { email } = this.props;
    const { actualCurrency } = this.state;
    return (
      <div id="wallet-div">
        <WalletHeader
          email={ email }
          actualCurrency={ actualCurrency }
        />
        <WalletForm />
        <WalletTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  defineCurrencys: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user: { email, password } }) => ({
  email,
  password,
});

const mapDispatchToProps = (dispatch) => ({
  defineCurrencys: () => dispatch(defineCurrencysAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
