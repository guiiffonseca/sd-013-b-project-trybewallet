import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import { fetchApi, fetchExpenses } from '../actions';
import TextArea from './TextArea';
import Coins from './Coins';

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      method: '',
      tag: '',
      currency: 'USD',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCoin } = this.props;
    getCoin();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const form = this.state;
    const { setExpense } = this.props;
    setExpense(form);
    this.setState((previousValue) => ({
      id: previousValue.id + 1,
    }));
  }

  render() {
    const { value, description, method, currency, tag } = this.state;
    return (
      <form>
        <Input
          type="text"
          name="value"
          id="valor"
          value={ value }
          label="valor"
          onChange={ this.handleChange }
        />
        <TextArea
          name="description"
          value={ description }
          id="Descrição"
          label="Descrição"
          onChange={ this.handleChange }
        />
        <Coins value={ currency } onChange={ this.handleChange } />
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

AddExpense.propTypes = {
  getCoin: PropTypes.func.isRequired,
  setExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCoin: (value) => dispatch(fetchApi(value)),
  setExpense: (value) => dispatch(fetchExpenses(value)),
});

export default connect(null, mapDispatchToProps)(AddExpense);
