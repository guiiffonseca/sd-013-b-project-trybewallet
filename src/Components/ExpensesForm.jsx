import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, addExpenses } from '../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(event) {
   this.setState({
     [event.target.name]: event.target.value,
   });
  }

  handleClick() {
    const { getCurrencies } = this.props;
    getCurrencies();
    const { expenses, currencies, globalState: { wallet } } = this.props;
    const { value,  description, currency, method, tag } = this.state;
    const id = wallet.expenses.length ? wallet.expenses.length : 0;
    expenses({ 
      id, value, description, currency, method, tag, exchangeRates: currencies 
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form className="form">
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" onChange={ this.handleChange }/>
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" name="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency" onChange={ this.handleChange }>
            { Object.values(currencies).map((curr, i) => (<option key={ i }>{ curr.code }</option>)) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type='button' onClick={ this.handleClick }>Adicionar Despesa</button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  getCurrencies: propTypes.func,
  currencies: propTypes.arrayOf(propTypes.object),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  expenses: (payload) => dispatch(addExpenses(payload)),
});

 const mapStateToProps = (state) => ({
  globalState: state,
  currencies: state.wallet.currencies,
 });

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
