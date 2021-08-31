import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tableHeaderContent, currenciesExplicitName } from '../data';

class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            { tableHeaderContent.map((content, index) => (
              <th key={ index }>{content}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { expenses.map(({ id, description, value, tag, method, currency, exchangeRates }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currenciesExplicitName[currency]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{ (Number(exchangeRates[currency].ask) * Number(value)).toFixed(2)}</td>
              <td>{currenciesExplicitName.BRL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);
// export default ExpensesTable;

// Header.propTypes = {
//   email: PropTypes.string,
// }.isRequeride;
