import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrenciesThunk, finishEditExpenseAction } from '../actions';

import SelectInput from './SelectInput';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class EditExpense extends React.Component {
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
    const { editExpense, finishEditExpense, quitEditForm } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expense = {
      id: editExpense[0].id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: editExpense[0].exchangeRates,
    };
    finishEditExpense(expense);
    quitEditForm();
  }

  render() {
    const { currencies = [], editExpense = [] } = this.props;
    return (
      <form action="">
        <label htmlFor="value">
          Valor
          <input
            name="value"
            id="value"
            type="text"
            placeholder={ editExpense[0].value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            id="description"
            type="text"
            placeholder={ editExpense[0].description }
            onChange={ this.handleChange }
          />
        </label>
        <SelectInput
          label="Moeda"
          inputValue="currency"
          optionsArray={ currencies }
          placeholder={ editExpense[0].currency }
          handleChange={ this.handleChange }
        />
        <SelectInput
          label="Método de pagamento"
          inputValue="method"
          optionsArray={ paymentOptions }
          placeholder={ editExpense[0].method }
          handleChange={ this.handleChange }
        />
        <SelectInput
          label="Tag"
          inputValue="tag"
          optionsArray={ tagOptions }
          placeholder={ editExpense[0].tag }
          handleChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleClick }>Editar despesa</button>
      </form>
    );
  }
}

EditExpense.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  finishEditExpense: PropTypes.func.isRequired,
  quitEditForm: PropTypes.func.isRequired,
  editExpense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ wallet: { currencies, editExpense } }) => ({
  currencies,
  editExpense,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  finishEditExpense: (expense) => dispatch(finishEditExpenseAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
