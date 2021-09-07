import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Coin from '../components/Coin';
import Payment from '../components/Payment';
import Tags from '../components/Tags';
import InputEntrys from '../components/InputEntrys';
import currenciesThunk from '../actions';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <div>
          TrybeWallet
          <Header />
        </div>
        <form>
          <InputEntrys />
          <Coin currencies={ currencies } />
          <Payment />
          <Tags />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(currenciesThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
