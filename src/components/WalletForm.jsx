import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectCurrencyForm from './SelectCurrencyForm';
import { selectedCurrency as selectedCurrencyAction } from '../actions';
import SelectPaymentForm from './SelectPaymentForm';
import SelectTagForm from './SelectTagForm';

class WalletForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      valueField: 0,
      describeField: '',
      selectCurrency: 'USD',
      selectPayment: 'dinheiro',
      selectTag: 'alimentacao',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const {
      valueField,
      describeField,
      selectCurrency,
      selectPayment,
      selectTag } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="value-field">
            Valor
            <input
              type="number"
              name="valueField"
              id="value-field"
              value={ valueField }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="describe-field">
            Descrição
            <textarea
              name="describeField"
              id="describe-field"
              cols="30"
              rows="1"
              value={ describeField }
              onChange={ this.handleChange }
            />
          </label>
          <SelectCurrencyForm
            value={ selectCurrency }
            handleChange={ this.handleChange }
          />
          <SelectPaymentForm
            value={ selectPayment }
            handleChange={ this.handleChange }
          />
          <SelectTagForm
            value={ selectTag }
            handleChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  selectedCurrency: (state) => dispatch(selectedCurrencyAction(state)),
});

export default connect(null, mapDispatchtoProps)(WalletForm);
