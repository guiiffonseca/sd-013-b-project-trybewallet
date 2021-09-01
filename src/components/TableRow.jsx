import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteExpense as deleteExpenseAction } from '../actions';

import deleteIcon from '../images/bin.png';
import editIcon from '../images/editing.png';

class TableRow extends Component {
  render() {
    const { expense, key, deleteExpense } = this.props;
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = expense;
    const userExchange = exchangeRates[currency].ask;
    const userExchangeFixed = parseFloat(userExchange).toFixed(2);
    const userExchangeCurrency = exchangeRates[currency].name.split('/');
    const userExchangeIncomplete = exchangeRates[currency].name;
    return (
      <tr key={ key }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>
          { userExchangeCurrency[0] ? userExchangeCurrency[0] : userExchangeIncomplete }
        </td>
        <td>{ userExchangeFixed }</td>
        <td>{ (userExchange * parseFloat(value)).toFixed(2) }</td>
        <td>{ userExchangeCurrency[1] ? userExchangeCurrency[1] : 'Real' }</td>
        <td>
          <img className="btn-icon" src={ editIcon } alt="Editar despesa" />
          <button
            className="btn-deletar"
            type="button"
            data-testid="delete-btn"
            onClick={ () => deleteExpense(id) }
          >
            <img className="btn-icon" src={ deleteIcon } alt="Apagar despesa" />
          </button>
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  key: PropTypes.number.isRequired,
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape({}).isRequired,
  }).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(
    deleteExpenseAction(id),
  ),
});

export default connect(null, mapDispatchToProps)(TableRow);
