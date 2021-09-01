import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputField from './InputField';
import { getCurrencyThunk, addExpense } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 3,
      description: 'Hot Dog',
      currency: 'TST',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  resetState() {
    this.setState({
      value: 0,
      description: '',
      currency: 'TST',
      method: 'Dinheiro',
      tag: 'Lazer',
    });
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  addExpense() {
    const { addExpenseAction, getCurrReq } = this.props;
    const { value } = this.state;
    getCurrReq();
    addExpenseAction({
      ...this.state,
      currency: document.getElementById('pay_currency').value,
      method: document.getElementById('pay_met').value,
      tag: document.getElementById('tag').value,
      value,
    });
    this.resetState();
  }

  renderInput(value, labelName, name, type) {
    return (
      <InputField
        value={ value }
        labelName={ labelName }
        name={ name }
        type={ type }
        handleChange={ this.handleChange }
      />
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    const coins = Object.values(currencies);

    return (
      <form>
        {this.renderInput(value, 'Valor', 'value', 'number')}
        {this.renderInput(description, 'Descrição', 'description', 'text')}
        <label htmlFor="pay_currency">
          Moeda
          <select name="pay_currency" id="pay_currency">
            {coins.map((coin) => <option key={ coin.code }>{coin.code}</option>)}
          </select>
        </label>
        <label htmlFor="pay_met">
          Método de pagamento
          <select name="pay_met" id="pay_met">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.addExpense }>adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseAction: (payload) => dispatch(addExpense(payload)),
  getCurrReq: () => dispatch(getCurrencyThunk()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpenseAction: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
