import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { filterExpense } from '../actions';

class WalletTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { expenses, setExpense } = this.props;
    setExpense(expenses.filter(({ id }) => id !== Number(target.id)));
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
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
            { expenses.map(
              ({ id, description, tag, method, value, currency, exchangeRates }) => (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                  <td>{ (Number(exchangeRates[currency].ask)).toFixed(2) }</td>
                  <td>
                    { (Number(value) * Number(exchangeRates[currency].ask)).toFixed(2) }
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      name="delete-btn"
                      onClick={ (e) => this.handleClick(e) }
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  setExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpense: (expenses) => dispatch(filterExpense(expenses)),
});

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
