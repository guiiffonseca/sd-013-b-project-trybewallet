import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrenciesThunk, setExpenseThunk } from '../actions';

import SelectInput from './SelectInput';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class AddExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { setExpense, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    };
    setExpense(expense);
  }

  render() {
    const { currencies = [] } = this.props;
    return (
      <form action="">
        <label htmlFor="value">
          Valor
          <input
            name="value"
            id="value"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            id="description"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <SelectInput
          label="Moeda"
          inputValue="currency"
          optionsArray={ currencies }
          handleChange={ this.handleChange }
        />
        <SelectInput
          label="Método de pagamento"
          inputValue="method"
          optionsArray={ paymentOptions }
          handleChange={ this.handleChange }
        />
        <SelectInput
          label="Tag"
          inputValue="tag"
          optionsArray={ tagOptions }
          handleChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

AddExpense.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  setExpense: (expense) => dispatch(setExpenseThunk(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
