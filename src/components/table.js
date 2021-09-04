import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNewExpenses } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.onClear = this.onClear.bind(this);
  }

  onClear({ target }) {
    const { expenses, getExpenses } = this.props;
    getExpenses(expenses.filter(({ id }) => id !== Number(target.id)));
  }

  renderTbody() {
    const { expenses } = this.props;
    return (
      <tbody>
        {
          expenses.map(({ id, description, tag, method, value, currency, exchangeRates,
          }) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>
                {
                  (parseFloat(value) * parseFloat(exchangeRates[currency].ask))
                    .toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  id={ id }
                  onClick={ (e) => this.onClear(e) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    );
  }

  render() {
    return (
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
        { this.renderTbody() }
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (expenses) => dispatch(getNewExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(String).isRequired,
  getExpenses: PropTypes.func.isRequired,
};
