import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses } from '../actions';

const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
const payOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newExpense: {
        id: props.expenses.length,
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const result = await (await fetch(ENDPOINT)).json();
    delete result.USDT;
    const { addExpense } = this.props;
    const { newExpense } = this.state;
    this.setState({ newExpense: { ...newExpense, id: newExpense.id + 1 } });
    addExpense({ ...newExpense, exchangeRates: result });
  }

  handleChange({ target }) {
    const { newExpense } = this.state;
    const { name, value } = target;
    this.setState(() => ({ newExpense: { ...newExpense, [name]: value } }));
  }

  showCurrOptions() {
    const { currencies } = this.props;
    return (
      Object.keys(currencies).map((element) => (
        <option key={ element } value={ `${element}` }>{element}</option>
      ))
    );
  }

  showPayOptions() {
    return (
      payOptions.map((element) => (
        <option key={ element } value={ `${element}` }>{element}</option>
      ))
    );
  }

  showTagOptions() {
    return (
      tag.map((element) => (
        <option key={ element } value={ `${element}` }>{element}</option>
      ))
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="value" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="describe">
          Descrição
          <input
            type="text"
            name="description"
            id="describe"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="currency"
            onChange={ this.handleChange }
          >
            { this.showCurrOptions() }
          </select>
        </label>
        <label htmlFor="payChoose">
          Método de pagamento
          <select
            id="payChoose"
            name="method"
            onChange={ this.handleChange }
          >
            { this.showPayOptions() }
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            onChange={ this.handleChange }
          >
            { this.showTagOptions() }
          </select>
        </label>
        <button type="button" onClick={ this.onSubmit }>Adicionar despesa</button>
      </form>
    );
  }
}

ExpenseLoader.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(getExpenses(expense)),
  // addImage: (image) => dispatch(getImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseLoader);
