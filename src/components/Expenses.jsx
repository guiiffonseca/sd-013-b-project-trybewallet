import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de Pagamento</th>
            <th>Valor</th>
            <th>Câmbio</th>
            <th>Valor Convertido</th>
            <th>Moeda de Conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {/* feito com ajuda do John Torres */}
          {console.log(expenses)}
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
                <td>
                  {
                    parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)
                  }
                </td>
                <td>
                  {parseFloat(expense.value * expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

// function mapStateToProps(state) {
//   return {
//     expenses: state.wallet.expenses,
//   };
// }

Expenses.propTypes = {
  expenses: PropTypes.shape().isRequired,
};
export default connect(mapStateToProps, null)(Expenses);
