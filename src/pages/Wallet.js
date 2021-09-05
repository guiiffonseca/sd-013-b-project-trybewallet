import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForms from '../components/ExpensesForm';
import { setMoedas as setMoedasAction } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { setMoedas, moedas } = this.props;

    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((data) => setMoedas(data));

    delete moedas.USDT;
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            0
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        <ExpenseForms />
      </>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  moedas: state.wallet.moedas,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  setMoedas: PropTypes.func.isRequired,
  moedas: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setMoedas: (payload) => dispatch(setMoedasAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
