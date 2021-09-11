import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setWalletValue } from '../../actions';
import getCurrencies from '../../services/currenciesAPI';
import Input from './Input';
import Select from './Select';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      expense: {
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Lazer',
      },
      despesa: 0,
      counter: 0,
      formaPg: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      category: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
    this.updateDespesas = this.updateDespesas.bind(this);
  }

  handleChange(e) {
    const { counter } = this.state;
    const { wallet: { currencies } } = this.props;
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      expense: {
        ...prevState.expense,
        id: counter,
        [name]: value,
        exchangeRates: currencies,
      },
    }));
  }

  addExpenses() {
    const { expenses, expense, counter } = this.state;
    const { currency, value } = expense;
    expenses.push(expense);
    this.updateDespesas(currency, value);
    const newCounter = counter + 1;
    this.setState((prevState) => ({ ...prevState,
      expense: {
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Lazer',
      },
      counter: newCounter }));
  }

  async updateDespesas(currency, value) {
    const data = await getCurrencies();
    const { despesa } = this.state;
    const { dispatchSetWalletValue } = this.props;
    this.setState({
      despesa: despesa + (Number(value) * Number(data[currency].ask)),
    }, () => { dispatchSetWalletValue(this.state); });
  }

  render() {
    const { wallet: { currencies } } = this.props;
    const { formaPg, category } = this.state;
    if (currencies.length === 0) {
      return (<h1>Loading...</h1>);
    }
    return (
      <form className="form">
        <Input
          label="Valor"
          name="value"
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          name="description"
          onChange={ this.handleChange }
        />
        <Select
          label="Moeda"
          name="currency"
          ops={ Object.keys(currencies) }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento"
          name="method"
          ops={ formaPg }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag"
          name="tag"
          ops={ category }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.addExpenses }>Adicionar despesa</button>
      </form>
    );
  }
}

Forms.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.string),
    currencies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  dispatchSetWalletValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetWalletValue: (payload) => dispatch(setWalletValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
