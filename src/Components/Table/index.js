import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    if (expenses.length === 0) return <h1>Sem despesas</h1>;
    return (
      <table>
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
        {
          expenses.map((despesa) => (
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
              <td>Editar/Excluir</td>
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

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
