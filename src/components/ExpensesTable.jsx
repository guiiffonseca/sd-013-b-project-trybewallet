import React from 'react';
import ItensTable from './ItensTable';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;
    // // const {description, method, tag, value, currency, exchangeRates } = expenses;
    return (
      <table>
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
          <tr>
            {
              expenses
                .map((expense) => <ItensTable key={ expense.id } expense={ expense } />)
            }
          </tr>
        </tbody>
      </table>
    );
  }
}

// const mapStateToProps = ({ expenses: { wallet: expenses } }) => ({
//   expenses,
// });

export default (ExpensesTable);
