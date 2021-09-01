import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { removeExpense, editExpense } from '../../actions';

class Table extends Component {
  deleteFromState(index) {
    const { removeFromState } = this.props;
    removeFromState(index);
  }

  saveExpense(despesa) {
    const { edit } = this.props;
    edit(despesa);
  }

  renderTh() {
    return (
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
    );
  }

  render() {
    const { expenses } = this.props;
    if (expenses.length === 0) return <h1>Sem despesas</h1>;
    return (
      <table>
        {
          this.renderTh()
        }
        {
          expenses.map((despesa, index) => (
            <tr key={ despesa.id }>
              <td>{ despesa.description }</td>
              <td>{ despesa.tag }</td>
              <td>{ despesa.method }</td>
              <td>{ despesa.value }</td>
              <td>{ despesa.exchangeRates[despesa.currency].name.split('/')[0] }</td>
              <td>{ Number(despesa.exchangeRates[despesa.currency].ask).toFixed(2) }</td>
              <td>
                {
                  (Number(despesa.value)
                  * Number(despesa.exchangeRates[despesa.currency].ask))
                    .toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.deleteFromState(index) }
                >
                  Remover
                </button>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => this.saveExpense(despesa) }
                >
                  Editar
                </button>
              </td>
            </tr>
          ))
        }
      </table>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  expenses: dispatch.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromState: (index) => dispatch(removeExpense(index)),
  edit: (despesa) => dispatch(editExpense(despesa)),
});

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
  removeFromState: propTypes.func.isRequired,
  edit: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
