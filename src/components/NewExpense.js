import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { fetchExpense, ENDPOINT } from '../actions/index';

class NewExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      exchangeRates: {},
      currency: 'USD',
      method: 'dinheiro',
      tag: 'Alimentação',
      id: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    this.setState({ exchangeRates: data });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { add } = this.props;
    const { id } = this.props;
    add({ ...this.state, id });
  }

  renderInputs() {
    const {
      value,
      description,
    } = this.state;

    return (
      <div>
        <Input
          label="valor:"
          name="value"
          inputType="text"
          inputPlaceholder="Valor da Compra"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição:"
          name="description"
          inputType="text"
          inputPlaceholder="Descrição da Compra"
          value={ description }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderSelects() {
    const {
      exchangeRates,
      currency,
      method,
      tag,
    } = this.state;

    return (
      <div>
        <Select
          options={
            Object.keys(exchangeRates)
              .filter((actualCurrency) => actualCurrency !== 'USDT')
          }
          labelText="Moeda:"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          labelText="Método de Pagamento"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          labelText="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderButton() {
    return (
      <Button
        button="Adicionar despesa"
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
        { this.renderButton() }
      </form>
    );
  }
}

NewExpense.propTypes = {
  add: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  add: (expense) => dispatch(fetchExpense(expense)),
});

const mapStateToProps = (state) => ({
  id: state.wallet.expenses.length,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExpense);
