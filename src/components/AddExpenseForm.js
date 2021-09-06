import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { saveExpenseAction, fetchCurrencies } from '../actions';

import CurrencyToAdd from './CurrencyToAdd';
import DescriptionToAdd from './DescriptionToAdd';
import PaymentMethodToAdd from './PaymentMethodToAdd';
import TagToAdd from './TagToAdd';
import ValueToAdd from './ValueToAdd';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
    };
    this.addExpense = this.addExpense.bind(this);
    this.saveSelectionsToState = this.saveSelectionsToState.bind(this);
  }

  addExpense() {
    const { saveExpense, loadCurrencies } = this.props;
    const expense = Object.values(this.state);
    loadCurrencies();
    saveExpense(expense);
  }

  saveSelectionsToState(selectedElement) {
    const { target: { name, value } } = selectedElement;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <form>
          <ValueToAdd
            handleSelections={ this.saveSelectionsToState }
          />
          <DescriptionToAdd
            handleSelections={ this.saveSelectionsToState }
          />
          <CurrencyToAdd
            handleSelections={ this.saveSelectionsToState }
          />
          <PaymentMethodToAdd
            handleSelections={ this.saveSelectionsToState }
          />
          <TagToAdd
            handleSelections={ this.saveSelectionsToState }
          />
        </form>
        <button
          type="button"
          onClick={ this.addExpense }
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(saveExpenseAction(expense)),
  loadCurrencies: () => dispatch(fetchCurrencies()),
});

AddExpenseForm.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  loadCurrencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddExpenseForm);
