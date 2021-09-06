import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesTableHeader from './ExpensesTableHeader';
import { deleteAction } from '../actions';

class ExpensesTable extends Component {
  constructor(props) {
    super(props);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  render() {
    const { expenses } = this.props;

    return (
      <table>
        <ExpensesTableHeader />
        <tbody>
          {
            expenses.length > 0
              ? expenses.map((expense) => {
                if (expense.exchangeRates.USD !== undefined) {
                  const {
                    id, value,
                    description, method,
                    tag, exchangeRates,
                  } = expense;
                  const rate = exchangeRates[expense.currency];
                  const nameCurrency = rate.name.split('/')[0];
                  return (
                    <tr key={ id }>
                      <td>{description}</td>
                      <td>{tag}</td>
                      <td>{method}</td>
                      <td>{value}</td>
                      <td>{nameCurrency}</td>
                      <td>{parseFloat(rate.ask).toFixed(2)}</td>
                      <td>{(rate.ask * value).toFixed(2)}</td>
                      <td>Real</td>
                      <td>
                        <button type="button">Editar</button>
                        <button
                          type="button"
                          onClick={ () => this.deleteExpense(id) }
                          data-testid="delete-btn"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  );
                }
                return (<tr key="a"><td>Sem Despesas</td></tr>);
              })
              : <tr><td colSpan="9">Sem Despesas</td></tr>
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteAction(id)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
