import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpensesThunk, setCurrenciesThunk } from '../actions';
import { Button, Input, Select } from './Index';

class AddExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id, addExpense, expenses } = this.props;
    this.setState({ id, expenses }, () => addExpense(this.state));
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { currencies } = this.props;

    return (
      <form className="add-expenses">
        <Input
          type="number"
          label="Valor"
          id="value"
          step="0.01"
          change={ this.handleChange }
        />

        <Input
          type="text"
          label="Descrição"
          id="description"
          change={ this.handleChange }
        />

        <Select
          id="currency"
          label="Moeda"
          options={ currencies }
          change={ this.handleChange }
        />

        <Select
          id="method"
          label="Método de pagamento"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          change={ this.handleChange }
        />

        <Select
          id="tag"
          label="Tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          change={ this.handleChange }
        />

        <Button
          click={ this.handleSubmit }
          label="Adicionar despesa"
        />
      </form>
    );
  }
}

AddExpensesForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  id: PropTypes.number.isRequired,
  setCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpensesThunk(expense)),
  setCurrencies: () => dispatch(setCurrenciesThunk()),
});

const mapStateToProps = (state) => ({
  id: state.wallet.expenses.length,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensesForm);
