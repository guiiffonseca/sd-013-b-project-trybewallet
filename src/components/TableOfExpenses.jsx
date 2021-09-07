import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LineOfTable from './LineOfTable';

class TableOfExpenses extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    const descriptionsHeader = [
      'Descrição',
      'Tag', 'Método de pagamento',
      'Valor', 'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir'];
    if (expenses.length > 0) {
      const descriptionExpenses = expenses.map((expense) => {
        const currencyActual = expense.exchangeRates[expense.currency];
        return [
          expense.description,
          expense.tag,
          expense.method,
          `${expense.value}`,
          currencyActual.name,
          parseFloat(currencyActual.ask).toFixed(2),
          parseFloat(currencyActual.ask) * parseFloat(expense.value) || 0,
          'Real',
        ];
      });
      return (
        <table>
          <thead>
            <LineOfTable textLine={ descriptionsHeader } typeTable="th" />
          </thead>
          <tfoot>
            {descriptionExpenses
              .map((descriptionExpense, index) => (<LineOfTable
                key={ index }
                textLine={ descriptionExpense }
                typeTable="td"
              />))}
          </tfoot>
        </table>
      );
    }
    return (
      <table>
        <thead>
          <LineOfTable textLine={ descriptionsHeader } typeTable="th" />
        </thead>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps, null)(TableOfExpenses);

TableOfExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
