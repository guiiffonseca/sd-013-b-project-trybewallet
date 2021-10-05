import React, { Component } from 'react';

import InputValueExpenses from './InputValueExpenses';
import InputDescribeExpenses from './InputDescribeExpenses ';
import SelectCurrency from './SelectCurrency';
import SelectTypePayment from './SelectTypePayment';
import SelectKindExpense from './SelectKindExpense';

class Forms extends Component {
  render() {
    return (
      <form>
        <InputValueExpenses />
        <InputDescribeExpenses />
        <SelectCurrency />
        <SelectTypePayment />
        <SelectKindExpense />
      </form>

    );
  }
}

export default Forms;
