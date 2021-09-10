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
    const valorSub = expenses[id].valor;
    console.log(expenses[id].valor);
    delete expenses[id];
    this.setState({
      expenses,
      despesa: despesa - valorSub,
    }, () => { dispatchSetWalletValue(this.state); });
    console.log('to querendo deletar aqui');
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
      const valorNumero = (Number(value)).toFixed(2);
      const moedaConversao = (Number(exchangeRates.ask || 0)).toFixed(2);

      return (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ `${currency} ${parseFloat((value || 0)).toFixed(2)}` }</td>
          <td>{ exchangeRates.name }</td>
          <td>{ parseFloat((exchangeRates.ask || 0)).toFixed(2) }</td>
          <td>{ (valorNumero * moedaConversao).toFixed(2) }</td>
          <td>Real</td>
          <td id={ id }>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ this.deleteLine }
            >
              Butão
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
