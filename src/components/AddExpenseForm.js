import React, { Component } from 'react';
// import { connect } from 'react-redux';
import CurrencyToAdd from './CurrencyToAdd';
import DescriptionToAdd from './DescriptionToAdd';
import PaymentMethodToAdd from './PaymentMethodToAdd';
import TagToAdd from './TagToAdd';
import ValueToAdd from './ValueToAdd';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <ValueToAdd
          onChange={ this.handleChange }
        />
        <DescriptionToAdd
          onChange={ this.handleChange }
        />
        <CurrencyToAdd
          onChange={ this.handleChange }
        />
        <PaymentMethodToAdd
          onChange={ this.handleChange }
        />
        <TagToAdd
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddExpenseForm;
