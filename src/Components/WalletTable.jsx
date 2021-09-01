import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense as removeExpenseAction } from '../actions';

class WalletTable extends React.Component {
  constructor() {
    super();
    this.removeItemCall = this.removeItemCall.bind(this);
  }

  removeItemCall({ target: { name } }) {
    const { removeExpense } = this.props;
    removeExpense(name);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.length > 0 && expenses.map((expense) => {
              const { id, description, tag, method, value,
                currency, exchangeRates } = expense;
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>{Number(value) * exchangeRates[currency].ask}</td>
                  <td>Real</td>
                  <td>
                    <button
                      name={ id }
                      data-testid="delete-btn"
                      type="button"
                      onClick={ this.removeItemCall }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
