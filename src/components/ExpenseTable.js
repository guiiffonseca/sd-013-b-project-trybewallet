/* import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    if (expenses) console.log(expenses);
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
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <thead>
          <tr>
            { expenses.map(({ description, id }) => (<td key={ id }>{description}</td>)) }
            { expenses.map(({ tag, id }) => (<td key={ id }>{tag}</td>)) }
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
        </thead>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
 */