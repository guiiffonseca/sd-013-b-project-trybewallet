import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      description: '',
    };

    this.delete = this.delete.bind(this);
  }

  /** source: 
   * https://pt.stackoverflow.com/a/449628 
   * https://developer.mozilla.org/pt-BR/docs/Web/API/Element/closest */
  /** closest() 
   * O método Element.closest() retorna o ancestral mais próximo, em relação ao elemento atual, que possui o
   * seletor fornecido como parâmetro, neste caso o 'tr'. Caso não exista um ancestral o método retorna null. 
   * Lembrando que o event é passado de forma automática e dentro dele temos o 'target' */
  delete({ target }) {
    target.closest('tr').remove();
  }

  render() {
    const { expenses } = this.props;
    const { description } = this.state;
    return (
      <table>
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
            {
              // esse ternário está aqui apenas para a aplicação não quebrar no primeiro render
              expenses.length <= 0 ? description
                : ( expenses.map((expense, index) => {
                  return (
                    <tr key={index}>
                      <td>{ expense.description }</td>
                      <td>{ expense.tag }</td>
                      <td>{ expense.method }</td>
                      <td>{ expense.value }</td>
                      <td>{ expense.exchangeRates[expense.currency].name }</td>
                      <td>{ parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
                      <td>{ (parseFloat(expense.exchangeRates[expense.currency].ask) * expense.value).toFixed(2) }</td>
                      <td>Real</td>
                      <td><input type="button" value="Deletar" data-testid="delete-btn" onClick={ this.delete }/></td>
                    </tr>
                  )
                }))
            }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
