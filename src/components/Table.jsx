import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense as deleteExpenseAction } from '../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  /** source:
   * https://pt.stackoverflow.com/a/449628
   * https://developer.mozilla.org/pt-BR/docs/Web/API/Element/closest */
  /** closest()
   * O método Element.closest() retorna o ancestral mais próximo, em relação ao elemento atual, que possui o
   * seletor fornecido como parâmetro, neste caso o 'tr'. Caso não exista um ancestral o método retorna null.
   * Lembrando que o event é passado de forma automática e dentro dele temos o 'target'
   * Não está sendo mais usada mas fica de aprendizado
   * */
  delete({ target }) {
    target.closest('tr').remove();
  }

  render() {
    const { expenses, deleteExpense } = this.props;

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
        { expenses
          .map(({ description, tag, method, value, exchangeRates, currency }, index) => (
            <tr key={ index }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name }</td>
              <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>{ (parseFloat(exchangeRates[currency].ask) * value).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <input
                  type="button"
                  value="Deletar"
                  data-testid="delete-btn"
                  onClick={ () => deleteExpense(index) }
                />
              </td>
            </tr>
          )) }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (index) => dispatch(deleteExpenseAction(index)),
});

Table.propTypes = {
  expenses: PropTypes.objectOf({}).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
