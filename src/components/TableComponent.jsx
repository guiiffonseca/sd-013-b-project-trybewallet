import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class TableComponent extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de Pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio Utilizado</th>
          <th>Valor Convertido</th>
          <th>Moeda Conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { expenses
          .map(({ id, description, tag, method, value, currency, exchangeRates }) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              { exchangeRates[currency].code }
              <td>
                { Number(value) * Number(exchangeRates[currency].ask).toFixed(2) }
              </td>
              <td>BRL</td>
            </tr>
          ))}
      </table>
    );
  }
}

TableComponent.propTypes = ({
  expenses: PropTypes.objectOf(PropTypes.any),
}.isRequired);

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(TableComponent);
