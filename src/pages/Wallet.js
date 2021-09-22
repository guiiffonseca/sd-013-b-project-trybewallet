import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForms from '../components/ExpensesForm';
import { fetchMoedas } from '../actions';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  constructor() {
    super();

    this.sumTotal = this.sumTotal.bind(this);
  }

  // faz o fetch ao montar o componente
  componentDidMount() {
    const { fetchMoedasAction } = this.props;
    fetchMoedasAction();
  }

  // soma o total das despesas
  sumTotal() {
    const { expenses } = this.props;
    let sum = 0;

    expenses.map((crr) => {
      sum += Number(crr.value) * Number(crr.exchangeRates[crr.currency].ask);
      return sum;
    });

    return sum.toFixed(2);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            {expenses.length > 0 ? this.sumTotal() : 0}
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        <ExpenseForms />
        <ExpenseTable />
      </>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedasAction: () => dispatch(fetchMoedas()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchMoedasAction: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
