import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseInfo from '../ExpenseInfo';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;

    return (
      <table>
        <caption>Minha Carteira</caption>
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
        <tbody>
          { expenses.map((expense) => (
            <ExpenseInfo key={ expense.id } { ...expense } />)) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(ExpensesTable);
