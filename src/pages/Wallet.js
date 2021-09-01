import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesTable from '../components/ExpensesTable';
import { fetchCurrencyThunk, fetchGetCurrenciesThunk } from '../actions';
import Header from '../components/Header';
// import InputForm from '../components/InputForm';
// import './Wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.addExpenses = this.addExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderSelectTag = this.renderSelectTag.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  addExpenses() {
    const { fetchGetCurrencies } = this.props;
    // const { currencies } = wallet;
    const { id } = this.state;
    const countId = Number(id) + 1;
    fetchGetCurrencies(this.state);
    this.setState({
      id: countId,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderInputs(type, name, value, labelName) {
    return (
      <label htmlFor={ name }>
        { labelName }
        <input
          id={ name }
          type={ type }
          name={ name }
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSelectTag(tag) {
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  renderMethodToPay(method) {
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select id="method" name="method" value={ method } onChange={ this.handleChange }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  render() {
    const { user, wallet, expenses } = this.props;
    const { email } = user;
    const { currencies } = wallet;
    const { value, description, currency, method, tag } = this.state;

    return (
      <div>
        <Header email={ email } />
        <form id="form-currency">
          { this.renderInputs('number', 'value', value, 'Valor')}
          { this.renderInputs('text', 'description', description, 'Descrição')}
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {
                currencies
                  .map((currencyItem) => (
                    <option key={ currencyItem }>{ currencyItem }</option>))
              }
            </select>
          </label>
          { this.renderMethodToPay(method) }
          { this.renderSelectTag(tag) }
          <button type="button" onClick={ this.addExpenses }>Adicionar despesa</button>
        </form>
        <ExpensesTable expenses={ expenses } />
      </div>
    );
  }
}

// Códigos abaixo foram retirados do repositorio
// live lecture referente ao dia 16.3

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  fetchGetCurrencies: PropTypes.func.isRequired,
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyThunk()),
  fetchGetCurrencies: (currency) => dispatch(fetchGetCurrenciesThunk(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
