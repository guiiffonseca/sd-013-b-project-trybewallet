import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import formatCurrency from '../../utils/formatCurrency';
import { destroyExpense, prepareEditExpense } from '../../actions';

const ExpenseInfo = ({
  expense: {
    id,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates,
  },
  exclude,
  goToEdit,
  isEditing,
}) => {
  const { name, ask } = exchangeRates[currency];
  const convertedValue = parseFloat(value * ask);

  return (
    <tr key={ id }>
      <td>{ description }</td>
      <td>{ tag }</td>
      <td>{ method }</td>
      <td>{ formatCurrency(value) }</td>
      <td>{ name.split('/')[0] }</td>
      <td>{ formatCurrency(ask) }</td>
      <td>{ formatCurrency(convertedValue) }</td>
      <td>Real</td>
      <td>
        <button
          data-testid="delete-btn"
          type="button"
          disabled={ isEditing }
          onClick={ () => exclude(id) }
        >
          Delete
        </button>
        <button
          data-testid="edit-btn"
          type="button"
          disabled={ isEditing }
          onClick={ () => goToEdit(id) }
        >
          Editar
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  exclude: (id) => dispatch(destroyExpense(id)),
  goToEdit: (id) => dispatch(prepareEditExpense(id)),
});

const mapStateToProps = ({ wallet: { editor } }) => ({
  isEditing: editor,
});

ExpenseInfo.propTypes = {
  exclude: PropTypes.func.isRequired,
  goToEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  expense: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseInfo);
