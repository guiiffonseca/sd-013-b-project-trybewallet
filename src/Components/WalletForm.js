import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currencyList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    event.preventDefault();
    const { value, description, currency, method, tag } = this.state;
    const { addForm, expenses } = this.props;
    const promise = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await promise.json();
    const expenseObject = {
      value,
      description,
      currency,
      method,
      tag,
      id: expenses.length,
      exchangeRates: response,
    };
    addForm(expenseObject);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  async fetchCurrencies() {
    const promise = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await promise.json();
    delete response.USDT;
    const currencyList = Object.keys(response);
    this.setState({
      currencyList,
    });
  }

  renderSelects() {
    const { currency, method, tag, currencyList } = this.state;
    return (
      <div>
        <label htmlFor="currency" value={ currency }>
          Moeda
          <select id="currency" name="currency" onChange={ this.handleChange }>
            { currencyList.map((element) => (
              <option value={ element } key={ element }>{ element }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            name="method"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handleChange } value={ tag }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        { this.renderSelects() }
        <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  addForm: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addForm: (object) => dispatch(addExpense(object)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
