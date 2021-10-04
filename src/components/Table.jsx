import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { btnDelete } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.tableTH = this.tableTH.bind(this);
    this.tableTD = this.tableTD.bind(this);
    this.handleClik = this.handleClik.bind(this);
  }

  handleClik(id) {
    const { exclude } = this.props;
    exclude(id);
  }

  tableTH() {
    const headers = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
    ];
    return headers.map((col) => <th key={ col }>{ col }</th>);
  }

  tableTD() {
    const { expenses } = this.props;
    return expenses.map((exp) => (
      <tr key={ exp.id }>
        <td>{ exp.description }</td>
        <td>{ exp.tag }</td>
        <td>{ exp.method }</td>
        <td>{ exp.value }</td>
        <td>{ exp.exchangeRates[exp.currency].name.split('/')[0] }</td>
        <td>{ Number(exp.exchangeRates[exp.currency].ask).toFixed(2)}</td>
        <td>{Number(exp.value * exp.exchangeRates[exp.currency].ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => this.handleClik(exp.id) }
          >
            Excluir

          </button>
          {/* <button
            type="button"
            onClick={}
            data-testid="edit-btn"
          >
            Editar Despesa

            </button> */}
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>{ this.tableTH() }</tr>
          { this.tableTD() }
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  exclude: (id) => dispatch(btnDelete(id)),
});
Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
