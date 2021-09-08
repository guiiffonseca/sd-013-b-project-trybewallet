import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setExchangeRatesThunk as setExchangeRatesThunkAction,
  setExpenseAction } from '../actions/actionWallet';
import FormDespesas from '../components/FormDespesas';
import Header from '../components/Header';
import User from '../components/User';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.onClickUser = this.onClickUser.bind(this);
  }

  onClickUser(obj) {
    const { expenses, setExchangeRatesThunk } = this.props;
    const { value, currency, method, tag, description } = obj;
    const objeto = {
      id: expenses.length,
      value,
      currency,
      description,
      method,
      tag,
      exchangeRates: {},
    };

    setExchangeRatesThunk(objeto);
  }

  getMoedas() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const moedas = fetch(url)
      .then((response) => response.json())
      .then((json) => json);
    return moedas;
  }

  render() {
    return (
      <main>
        <Header />
        <FormDespesas onClickUser={ this.onClickUser } />
        <User />
      </main>
    );
  }
}

Wallet.propTypes = {
  setExchangeRatesThunk: PropTypes.func.isRequired,
  expenses: PropTypes.shape(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpense: (payload) => dispatch(setExpenseAction(payload)),
  setExchangeRatesThunk: (payload) => dispatch(setExchangeRatesThunkAction(payload)),
});

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
