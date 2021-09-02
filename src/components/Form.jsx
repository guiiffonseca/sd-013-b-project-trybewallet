import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dispatchApi } from '../actions';
import ExpensesButton from './ExpenseButton';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { newExpense, expenses } = this.props;
    const expensesLength = expenses.length;

    newExpense(this.state);

    if (expensesLength >= 0) {
      this.setState({ id: expensesLength + 1 });
    }
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input type="text" id="Valor" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input
            type="text"
            id="Descrição"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.handleChange }>
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="Pagamento">
          Método de Pagamento:
          <select type="text" id="Pagamento" name="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select type="text" id="Tag" name="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <ExpensesButton handle={ this.handleClick } />
      </form>
    );
  }
}

Form.propTypes = {
  newExpense: PropTypes.func,
  currencies: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: (expense) => dispatch(dispatchApi(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
