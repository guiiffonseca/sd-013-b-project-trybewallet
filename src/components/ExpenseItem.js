import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeExpense as removeExpenseAction } from '../actions';
import Button from './Button';

class ExpenseItem extends Component {
  constructor(props) {
    super(props);

    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  editItem() {
    console.log('xablau');
  }

  removeItem({ target }) {
    const { removeExpense } = this.props;
    removeExpense(target.value);
  }

  render() {
    const { expense } = this.props;
    const { id, description, method, tag, value, currency, exchangeRates } = expense;

    const [currencyName] = exchangeRates[currency].name.split('/');
    const ask = parseFloat(exchangeRates[currency].ask);
    const fixedAsk = ask.toFixed(2);

    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ currencyName }</td>
        <td>{ fixedAsk }</td>
        <td>{ value * ask }</td>
        <td>Real</td>
        <td>
          <Button
            value={ id }
            onClick={ this.editItem }
            text="Editar"
            testId="edit-btn"
          />
          <Button
            value={ id }
            onClick={ this.removeItem }
            text="X"
            testId="delete-btn"
          />
        </td>
      </tr>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.objectOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);
