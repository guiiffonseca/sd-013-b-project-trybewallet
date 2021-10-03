import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { excluiDespesas as excluiDespesasAction } from '../actions/index';

class Table extends React.Component {
  constructor() {
    super();

    this.handleExcluir = this.handleExcluir.bind(this);
  }

  // reference dos colegas do grupo whatsap
  handleExcluir(excluiId) {
    const { expenses, excluiDespesas } = this.props;
    const excluiFilter = expenses.filter(({ id }) => id !== excluiId);
    excluiDespesas(excluiFilter);
  }

  // referenc table https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table3
  render() {
    const { expenses } = this.props;
    return (
      <div className="table">
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
            {expenses
              .map(({ id, description, tag, method, value, currency, exchangeRates }) => (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{exchangeRates[currency].name.split('/')[0]}</td>
                  <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                  <td>{ value * (exchangeRates[currency].ask)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      className="bottonExclu"
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.handleExcluir(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  excluiDespesas: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,

});

const mapDispatchToProps = (dispatch) => ({
  excluiDespesas: (payload) => dispatch(excluiDespesasAction(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
