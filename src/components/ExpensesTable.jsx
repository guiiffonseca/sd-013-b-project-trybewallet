import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const TABLE_HEADERS = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'];

class ExpensesTable extends Component {
  // FUNÇÃO UTILIZADA APENAS PARA MOSTRAR O NOME CORRETO DE ACORDO COM A API
  // MAS DESNECESSÁRIA COM O MOCK

  // getName({ name }) {
  //   return name.slice(0, name.indexOf('/'));
  // }

  getAsk({ ask }) {
    return Math.round(ask * 100) / 100;
  }

  convertValue(value, { ask }) {
    return Math.round((value * ask) * 100) / 100;
  }

  render() {
    const { expenses } = this.props;

    return (
      <table>
        <tr>
          { TABLE_HEADERS.map((item) => <th key={ item }>{ item }</th>) }
        </tr>

        { expenses.map((
          { id, value, description, currency, method, tag, exchangeRates },
        ) => (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ value }</td>
            <td>{ exchangeRates[currency].name }</td>
            <td>{ this.getAsk(exchangeRates[currency])}</td>
            <td>{ this.convertValue(value, exchangeRates[currency]) }</td>
            <td>Real</td>
          </tr>
        ))}
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
//   addExpense: (expense) => dispatch(addExpensesThunk(expense)),
//   setCurrencies: () => dispatch(setCurrenciesThunk()),
// });

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);
