import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses } from '../../actions';

import InputValueExpenses from './InputValueExpenses';
import InputDescribeExpenses from './InputDescribeExpenses ';
import SelectCurrency from './SelectCurrency';
import SelectTypePayment from './SelectTypePayment';
import SelectKindExpense from './SelectKindExpense';

class Forms extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const ECONOMIA_API = 'https://economia.awesomeapi.com.br/json/all';
    const { id } = this.state;
    const { takeState } = this.props;

    fetch(ECONOMIA_API)
      .then((request) => request.json())
      .then((currencies) => this.setState({ exchangeRates: currencies }))
      .then(() => takeState(this.state))
      .then(() => this.setState({ id: id + 1 }));
  }

  render() {
    const { description, value, currency, method, tag } = this.state;
    const { handleChange, handleClick } = this;

    return (
      <form>
        <InputDescribeExpenses expense={ description } onChange={ handleChange } />
        <InputValueExpenses value={ value } onChange={ handleChange } />
        <SelectCurrency cur={ currency } onChange={ handleChange } />
        <SelectTypePayment payMet={ method } onChange={ handleChange } />
        <SelectKindExpense tag={ tag } onChange={ handleChange } />
        <button type="button" onClick={ handleClick }>Adicionar despesas</button>
      </form>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  takeState: (state) => dispatch(addExpenses(state)),
});

Forms.propTypes = {
  takeState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Forms);
