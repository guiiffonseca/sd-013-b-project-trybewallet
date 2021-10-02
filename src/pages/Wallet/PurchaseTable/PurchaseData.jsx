import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PurchaseData extends React.Component {
  render() {
    const { expenses, deleteEntry } = this.props;
    return (
      <tbody>
        { expenses.map((expense) => {
          const askPrice = Number(expense.exchangeRates[expense.currency].ask);
          return (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>
                { Math.ceil(100 * askPrice) / 100 }
              </td>
              <td>
                { Math.ceil(100 * askPrice * expense.value) / 100 }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ deleteEntry }
                  name={ expenses.indexOf(expense) }
                >
                  Cancelar compra
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

PurchaseData.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteEntry: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(PurchaseData);
