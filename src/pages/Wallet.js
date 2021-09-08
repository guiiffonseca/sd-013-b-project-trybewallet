import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Coin from '../components/Coin';
import Payment from '../components/Payment';
import Tags from '../components/Tags';
import InputEntrys from '../components/InputEntrys';
import { currenciesThunk, expensesThunk } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  onSubmit(event) {
    event.preventDefault();
    const { value, description, currency, method, tag } = this.state;
    const { setExpenses, expenses } = this.props;
    console.log(method);
    setExpenses({
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  }

  render() {
    const { currencies } = this.props;
    const { value, method } = this.state;
    return (
      <div>
        <div>
          TrybeWallet
          <Header value={ value } />
        </div>
        <form>
          <InputEntrys onChange={ this.handleChange } />
          <Coin
            currencies={ currencies }
            onChange={ this.handleChange }
          />
          <Payment
            onChange={ this.handleChange }
            method={ method }
          />
          <Tags onChange={ this.handleChange } />
          <button
            type="submit"
            onClick={ this.onSubmit }

          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(currenciesThunk()),
  setExpenses: (expense) => dispatch(expensesThunk(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
