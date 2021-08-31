import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeExpense } from '../../actions/index';

import './Table.css';

const headers = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

class Table extends React.Component {
  // constructor() {
  //   this.state =
  // }

  render() {
    const { expenses, remove } = this.props;

    return (
      <div className="wallet-table">
        <header className="row">
          { headers.map((el, i) => (
            <b role="columnheader" key={ i }>{el}</b>
          )) }
        </header>
        { expenses.map((expense) => {
          const { ask } = expense.exchangeRates[expense.currency];
          let currencyName = expense.currency;

          if (currencyName === 'USD') currencyName = 'Dólar Comercial';
          if (currencyName === 'EUR') currencyName = 'Euro';

          return (
            <div key={ expense.id } className="row">
              <p role="cell">{expense.description}</p>
              <p role="cell">{expense.tag}</p>
              <p role="cell">{expense.method}</p>
              <p role="cell">{expense.value}</p>
              <p role="cell">{currencyName}</p>
              <p role="cell">{ Number(ask).toFixed(2) }</p>
              <p role="cell">{Number(expense.value * ask).toFixed(2)}</p>
              <p role="cell">Real</p>
              <div role="cell">
                <button className="btn-edit" type="button">E</button>
                <button
                  type="button"
                  className="btn-delete"
                  data-testid="delete-btn"
                  onClick={ () => remove(expense.id) }
                >
                  X
                </button>
              </div>
            </div>
          );
        }) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeExpense({ id })),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
