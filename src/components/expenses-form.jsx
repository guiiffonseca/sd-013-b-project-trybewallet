import React, { Component } from 'react';
import SelectCurrency from './select-currency';
import SelectPayment from './select-payment';
import SelectTag from './select-tag';
// import { connect } from 'react-redux';

class ExpensesForm extends Component {
  render() {
    return (
      <form className="expenses-form">
        <label htmlFor="valor">
          Valor:
          {' '}
          <input
            id="valor"
            className="expensives-form-short-inputs"
            type="text"
            name="valor"
          />
        </label>

        <SelectCurrency />

        <SelectPayment />

        <SelectTag />

        <label htmlFor="descricao">
          Descrição:
          {' '}
          <input
            id="descricao"
            className="expensives-form-long-inputs"
            type="text"
            name="descricao"
          />
        </label>

      </form>
    );
  }
}

// const mapStateToProps = ({ user: { email } }) => ({ email });

// export default connect(mapStateToProps)(Header);

export default ExpensesForm;
