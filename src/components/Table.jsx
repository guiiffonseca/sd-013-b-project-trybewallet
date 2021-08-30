import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expensesFromGlobal } = this.props;
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
          <React.Fragment key={ index }>
            <td>{element.description}</td>
            <td>{element.tag}</td>
            <td>{element.method}</td>
            <td>{element.value}</td>
            <td>{element.currency}</td>
            <td>{element.exchangeRates[element.currency].name.split('/')[0]}</td>
            <td>5.58</td>
          </React.Fragment>))}
      </table>
    );
  }
}

Table.propTypes = {
  expensesFromGlobal: PropTypes.string.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expensesFromGlobal: wallet.expenses,
});

export default connect(mapStateToProps)(Table);
