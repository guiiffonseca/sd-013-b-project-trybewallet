import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.name = this.name.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  name(value, secondValue) {
    if (secondValue) {
      return (Math.round(value * secondValue * 100) / 100).toFixed(2);
    }
    return (Math.round(value * 100) / 100).toFixed(2);
  }

  handleClick(id) {
    const { remove } = this.props;
    remove(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tbody>
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
            {expenses
              .map(
                ({ description, tag, method, value, currency, exchangeRates, id }) => (
                  <tr key={ id }>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{value}</td>
                    <td>{exchangeRates[currency].name}</td>
                    <td>{this.name(exchangeRates[currency].ask)}</td>
                    <td>{this.name(exchangeRates[currency].ask, value)}</td>
                    <td>Real</td>
                    <td>
                      <button
                        // value={ id }
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => this.handleClick(id) }
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ),
              )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (item) => dispatch(removeExpenses(item)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Array).isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
