import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { fetchExpense, ENDPOINT, applyEddit, addCurrencies } from '../actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  id: 0,
};

class NewExpense extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.editRender = this.editRender.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  componentDidUpdate() {
    this.editRender();
  }

  async fetchCurrency() {
    const { addCurrency } = this.props;
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    const currencies = Object.keys(data)
      .filter((actualCurrency) => actualCurrency !== 'USDT');
    addCurrency(currencies);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { add, id } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    add({
      value,
      description,
      currency,
      method,
      tag,
      id,
    });
  }

  handleEdit(id) {
    const { edit } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    edit({
      value,
      description,
      currency,
      method,
      tag,
      id,
    });
  }

  editRender() {
    const { editor, expenses, idToEdit } = this.props;
    const { id } = this.state;
    if (editor && id !== idToEdit) {
      this.setState(expenses.find((expense) => expense.id === idToEdit));
    }
  }

  renderInputs() {
    const {
      value,
      description,
    } = this.state;

    return (
      <div>
        <Input
          label="Valor:"
          name="value"
          inputType="text"
          inputPlaceholder="Valor da Compra"
          testid="value-input"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição:"
          name="description"
          inputType="text"
          inputPlaceholder="Descrição da Compra"
          testid="description-input"
          value={ description }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderSelects() {
    const {
      currency,
      method,
      tag,
    } = this.state;

    const { currencies } = this.props;

    return (
      <div>
        <Select
          options={ currencies }
          labelText="Moeda:"
          name="currency"
          testid="currency-input"
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          labelText="Método de Pagamento"
          name="method"
          testid="method-input"
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          labelText="tag"
          name="tag"
          testid="tag-input"
          value={ tag }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderButtons() {
    const { editor, idToEdit } = this.props;
    if (editor) {
      return (
        <Button
          buttonText="Editar despesa"
          onClick={ () => this.handleEdit(idToEdit) }
          disabled={ false }
        />
      );
    }

    return (
      <Button
        buttonText="Adicionar despesa"
        onClick={ () => this.handleClick() }
        disabled={ false }
      />
    );
  }

  render() {
    return (
      <form>
        { this.renderInputs() }
        { this.renderSelects() }
        { this.renderButtons() }
      </form>
    );
  }
}

NewExpense.propTypes = {
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  addCurrency: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  idToEdit: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  add: (expense) => dispatch(fetchExpense(expense)),
  edit: (expense) => dispatch(applyEddit(expense)),
  addCurrency: (currencies) => dispatch(addCurrencies(currencies)),
});

const mapStateToProps = (state) => ({
  id: state.wallet.expenses.length,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExpense);
