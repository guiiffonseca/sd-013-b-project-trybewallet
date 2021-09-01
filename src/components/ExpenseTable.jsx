import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const data = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'
];

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <th>
            {data.map((string, index) => (
              <th key={index}>{string}</th>
            ))}
          </th>
        </thead>
        <tbody>
          {expenses.map(
            (
              { description, tag, method, value, exchangeRates, currency },
              index
            ) => (
              <th key={index}>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name.split("/")[0]}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>
                  {Number(value * exchangeRates[currency].ask).toFixed(2)}
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </th>
            )
          )}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpenseTable);
//https://tableless.com.br/tabelas-semanticas/
