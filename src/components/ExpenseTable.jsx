import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseItems from './ExpenseItems';

const tableHeader = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class ExpenseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div className="table-header">
        <table>
          <thead>
            <tr>
              { tableHeader.map((header, index) => (
                <th key={ index }>{ header }</th>
              )) }
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <ExpenseItems key={ expense.id } expense={ expense } />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
