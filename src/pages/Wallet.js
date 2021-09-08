import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currencies from '../api/currencyApi';
import { asyncAddExpense as asyncAddExpenseAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.renderCurrenciesOptions = this.renderCurrenciesOptions.bind(this);
    this.addExpenseClick = this.addExpenseClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.calcTotalExpenses = this.calcTotalExpenses.bind(this);

    this.state = {
      cur: {},
      form: {
        id: 0,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  onInputChange(e) {
    const { name, value } = e.target;
    const { form } = this.state;
    this.setState({ form: { ...form, [name]: value } });
  }

  async fetchCurrencies() {
    const data = await currencies();
    this.setState({ cur: data });
  }

  calcTotalExpenses() {
    const { expenses } = this.props;
    let sum = 0;
    if (expenses.length > 0) {
      expenses.forEach((x) => {
        const cur = x.currency;
        const { ask } = x.exchangeRates[cur];
        sum += x.value * ask;
        console.log(cur);
      });
    }
    return sum;
  }

  addExpenseClick() {
    const { asyncAddExpense } = this.props;
    const { state } = this;
    const { form } = this.state;
    asyncAddExpense(form);
    this.setState({
      ...state,
      form: {
        id: form.id + 1,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    });
  }

  renderCurrenciesOptions() {
    const { cur } = this.state;
    let options;
    if (Object.keys(cur).length === 0) options = [''];
    else options = Object.keys(cur);

    return options.map((x) => <option name={ x } value={ x } key={ x }>{x}</option>);
  }

  renderValueDescCur() {
    const { value, description, method } = this.state;
    return (
      <>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            id="valor"
            value={ value }
            name="value"
            onChange={ this.onInputChange }
          />

        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
            name="description"
            value={ description }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ method }
            onChange={ this.onInputChange }
          >
            {this.renderCurrenciesOptions()}
          </select>
        </label>
      </>
    );
  }

  renderPaymentOptions() {
    return (
      <select id="paymentmethod" name="method" onChange={ this.onInputChange }>
        <option id="dinheiro" value="Dinheiro">Dinheiro</option>
        <option id="credito" value="Cartão de crédito">Cartão de crédito</option>
        <option id="debito" value="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  renderTagOptions() {
    return (
      <select id="tag" name="tag" onChange={ this.onInputChange }>
        <option
          id="alimentacao"
          name="alimentacao"
          value="alimentacao"
        >
          Alimentação

        </option>
        <option id="lazer" value="Lazer">Lazer</option>
        <option id="trabalho" value="Trabalho">Trabalho</option>
        <option id="transporte" value="Transporte">Transporte</option>
        <option id="saude" value="Saúde">Saúde</option>
      </select>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{email}</div>
          <div data-testid="total-field">{this.calcTotalExpenses()}</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <div>
          <form>
            {this.renderValueDescCur()}

            <label htmlFor="paymentmethod">
              Método de pagamento
              {this.renderPaymentOptions()}
            </label>

            <label htmlFor="tag">
              Tag
              {this.renderTagOptions()}
            </label>

            <button
              type="button"
              onClick={ this.addExpenseClick }
            >
              Adicionar despesa
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  asyncAddExpense: (expense) => dispatch(asyncAddExpenseAction(expense)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  asyncAddExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
