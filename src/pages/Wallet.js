import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/formulario';
import { getFetchCurrencies } from '../actions';
import Table from '../components/table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      cambio: 'BRL',
    };
    this.fetchAwesomeApi = this.fetchAwesomeApi.bind(this);
    this.amountExpenses = this.amountExpenses.bind(this);
  }

  componentDidMount() {
    this.fetchAwesomeApi();
  }

  amountExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
      return acc;
    }, 0);
  }

  fetchAwesomeApi() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { cambio } = this.state;
    const { getEmail } = this.props;
    return (
      <>
        <header>
          <div>
            <span data-testid="email-field">{ `Email:${getEmail}` }</span>
            <span
              data-testid="total-field"
            >
              { `Despesa Total: R$ ${this.amountExpenses().toFixed(2)}` }
            </span>
            <span data-testid="header-currency-field">{ cambio }</span>
          </div>
        </header>
        <section>
          <Form amountExpenses={ this.amountExpenses } />
        </section>
        <section>
          <Table />
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getFetchCurrencies()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(String).isRequired,
};
