import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor() {
    super();
    this.name = this.name.bind(this);
  }

  name(value, secondValue) {
    if (secondValue) {
      return (Math.round(value * secondValue * 100) / 100).toFixed(2);
    }
    return (Math.round(value * 100) / 100).toFixed(2);
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
                ({ description, tag, method, value, currency, exchangeRates }, index) => (
                  <tr key={ index }>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{value}</td>
                    <td>{exchangeRates[currency].name}</td>
                    <td>{this.name(exchangeRates[currency].ask)}</td>
                    <td>{this.name(exchangeRates[currency].ask, value)}</td>
                    <td>Real</td>
                    <td>
                      <button type="button" data-testid="edit-btn">Editar </button>
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

Table.propTypes = {
  expenses: PropTypes.arrayOf(Array).isRequired,
};

export default connect(mapStateToProps)(Table);
