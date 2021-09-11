import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { novoExpense } from '../actions';

class Table extends React.Component {
  render() {
    const { editExpense } = this.props;
    const { expenses } = this.props;
    let total = 0;
    const titulos = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <tr>{ titulos.map((header) => (<th key={ header }>{header}</th>)) }</tr>
        {expenses
          .map(({ description, tag, method, value, currency, exchangeRates, id }) => {
            const moeda = exchangeRates[currency];
            const fixo = parseFloat(moeda.ask).toFixed(2);
            total = (parseFloat(value) * parseFloat(moeda.ask)).toFixed(2);
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ currency }</td>
                <td>{ moeda.name }</td>
                <td>{ `${fixo}` }</td>
                <td>{ `${total}` }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    // Tentei fazer de forma direta mas não consegui. Com o code-review do colega Eric (https://github.com/tryber/sd-012-project-trybewallet/commit/d856dff7bc0c28812337669dc0caad3e958d9787) vi que tinha que ter uma arrow function chamando outra função.
                    onClick={ () => { editExpense(id); } }
                  >
                    Editar/Excluir
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    );
  }
}

Table.propTypes = {
  editExpense: PropTypes.func.isRequired,
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (payload) => dispatch(novoExpense(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
