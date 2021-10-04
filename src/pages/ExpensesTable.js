import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';

class Table extends Component {
    render() {
      const { expenses, deleteSelected } = this.props;
      return (
        <table>
          <head>
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
          </head>
          <body>
            {expenses.map((item, index) => (
              <tr key={ index }>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{item.value}</td>
                <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
                <td>{parseFloat(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
                <td>
                  {
                    (parseFloat(item.value)
                    * parseFloat(item.exchangeRates[item.currency].ask))
                      .toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => deleteSelected(item) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </body>
        </table>
      );
    }
  }
  const mapStateToProps = (state) => ({
    expenses: state.wallet.expenses,
  });
  
  Table.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
    deleteSelected: PropTypes.func.isRequired,
  };
  
  const mapDispatchToProps = (dispatch) => ({
    deleteSelected: (item) => dispatch(deleteItem(item)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Table);