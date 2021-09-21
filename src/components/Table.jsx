import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setWalletValue } from '../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      despesa: 0,
    };

    this.createrTR = this.createrTR.bind(this);
    this.deleteLine = this.deleteLine.bind(this);
  }

  deleteLine({ target }) {
    const { wallet: { expenses, despesa }, dispatchSetWalletValue } = this.props;
    const { id } = target.parentNode;
    // funcão find pesquisa a despesa com o mesmo id e retorna para element
    const element = expenses.find((expense) => expense.id === Number(id));

    const { value, currency, exchangeRates } = element;
    const valorSub = (value * exchangeRates[currency].ask).toFixed(2);

    // mentoria Gabs: ao invés de utilizar o splice() e o indexOf() para remover
    // um elemento do array, melhor utilizar o filter para retornar o array sem
    // o elemento que desejo excluir.
    this.setState({
      expenses: expenses.filter((expense) => expense.id !== Number(id)),
      despesa: despesa - valorSub,
    }, () => dispatchSetWalletValue(this.state));
  }

  createrTR() {
    return (
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
      </tr>);
  }

  render() {
    const { wallet: { expenses } } = this.props;
    const tabelaDespesas = expenses.map((element) => {
      const {
        description, method, currency, id,
        tag, value, exchangeRates } = element;
      const moedaUsada = exchangeRates[currency];
      return (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ !moedaUsada.name ? 'undefined' : moedaUsada.name.split('/')[0] }</td>
          <td>{ Number(moedaUsada.ask || 0).toFixed(2) }</td>
          <td>{ (Number(value) * Number(moedaUsada.ask || 0)).toFixed(2) }</td>
          <td>Real</td>
          <td id={ id }>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ this.deleteLine }
            >
              DELETAR
            </button>
          </td>
        </tr>
      );
    });
    if (expenses.length > 0) {
      return (
        <table>
          <tbody>
            { this.createrTR() }
            {tabelaDespesas}
          </tbody>
        </table>
      );
    }
    return (
      <table>
        <tbody>
          { this.createrTR() }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.string),
    despesa: PropTypes.number,
  }).isRequired,
  dispatchSetWalletValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetWalletValue: (payload) => dispatch(setWalletValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
