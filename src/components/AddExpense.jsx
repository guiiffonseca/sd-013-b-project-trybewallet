import React from 'react';
import PropTypes from 'prop-types';

class AddExpense extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <p>{ expenses.currency }</p>
        <p>{ expenses.description }</p>
        <p>{ expenses.method }</p>
        <p>{ expenses.tag }</p>
        <p>{ expenses.value }</p>
        <p>{ expenses.exchangeRates[expenses.currency].ask }</p>
      </div>
    );
  }
}

AddExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default AddExpense;
