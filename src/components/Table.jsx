import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/index';

class Table extends Component {
  render() {
    const { expensesFromGlobal, funcDelete } = this.props;
    return (
      <table>
        <tbody>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tbody>
        {expensesFromGlobal.map((element, index) => (
          <Fragment key={ index }>
            <td>{element.description}</td>
            <td>{element.tag}</td>
            <td>{element.method}</td>
            <td>{element.value}</td>
            <td>{element.currency}</td>
            <td>{element.exchangeRates[element.currency].name.split('/')[0]}</td>
            <td>{parseFloat(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
            <td>{element.exchangeRates[element.currency].ask * element.value}</td>
            <td>Real</td>
            <button
              type="button"
              onClick={ () => funcDelete(index) }
              data-testid="delete-btn"
            >
              Excluir
            </button>
          </Fragment>))}
      </table>
    );
  }
}

Table.propTypes = {
  expensesFromGlobal: PropTypes.string.isRequired,
  funcDelete: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expensesFromGlobal: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  funcDelete: (index) => dispatch(deleteItem(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
