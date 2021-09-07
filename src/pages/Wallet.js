import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencyThunk, addExpenseThunk } from '../actions';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      description: '',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  calculateTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, current) => {
      const subTotal = current.value * current.exchangeRates[current.currency].ask;
      acc += subTotal;
      return acc;
    }, 0);
    return parseFloat(total).toFixed(2);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addExpense } = this.props;
    addExpense(this.state);
    this.setState((previous) => ({
      id: previous.id + 1,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      description: '',
      exchangeRates: '',
    }));
  }

  handleChanges({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  currencyOptionsCreator() {
    const { currencies } = this.props;
    return currencies.map((element) => (
      <option
        key={ element }
        value={ element }
      >
        { element }
      </option>
    ));
  }

  selectWithOptions() {
    const { method, tag } = this.state;
    return (
      <>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            id="pagamento"
            name="method"
            value={ method }
            onChange={ this.handleChanges }
          >
            <option
              name="Dinheiro"
              value="Dinheiro"
            >
              Dinheiro
            </option>
            <option
              name="Cartão de Crédito"
              value="Cartão de crédito"
            >
              Cartão de Crédito
            </option>
            <option
              name="Cartão de Débito"
              value="Cartão de débito"
            >
              Cartão de Débito
            </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChanges }
          >
            <option name="Alimentação" value="Alimentação">Alimentação</option>
            <option name="Lazer" value="Lazer">Lazer</option>
            <option name="Trabalho" value="Trabalho">Trabalho</option>
            <option name="Transporte" value="Transporte">Transporte</option>
            <option name="Saude" value="Saude">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  forms() {
    const { value, currency, description } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            name="value"
            id="valor"
            value={ value }
            onChange={ this.handleChanges }
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            type="text"
            name="description"
            id="descrição"
            value={ description }
            onChange={ this.handleChanges }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="currency"
            value={ currency }
            onChange={ this.handleChanges }
          >
            { this.currencyOptionsCreator() }
          </select>
        </label>
        { this.selectWithOptions() }
        <button type="submit" onClick={ this.handleSubmit }>Adicionar despesa</button>
      </form>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            { this.calculateTotal() }
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        {this.forms()}
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(String),
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  currencies: [],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyThunk()),
  addExpense: (payload) => dispatch(addExpenseThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
