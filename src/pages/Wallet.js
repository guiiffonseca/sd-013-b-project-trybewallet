import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from '../components/WalletForm';
import { fetchCurrenciesAPI, setExchangerates } from '../actions';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  constructor() {
    super();

    this.getTotalExpenses = this.getTotalExpenses.bind(this);
  }

  componentDidMount() {
    const { currenciesAPI } = this.props;
    currenciesAPI();
  }

  getTotalExpenses() {
    const { allExpenses } = this.props;
    let total = 0;

    allExpenses.forEach(({ value, currency, exchangeRates }) => {
      const convetedValue = parseFloat(value) * parseFloat(exchangeRates[currency].ask);
      total += parseFloat(convetedValue);
    });
    return total;
  }

  render() {
    const { userEmail } = this.props;
    const total1 = this.getTotalExpenses();

    return (
      <div>
        <header>
          <span data-testid="email-field">
            {`Carteira de ${userEmail}`}
          </span>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">{ total1 }</span>
        </header>
        <WalletForm />
        <ExpensesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  userEmail: user.email,
  allExpenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesAPI: () => dispatch(fetchCurrenciesAPI()),
  setExchangeratesFunc: () => dispatch(setExchangerates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
