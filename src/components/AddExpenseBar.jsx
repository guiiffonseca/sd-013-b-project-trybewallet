import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseInput from './ExpenseInput';
import ExpenseOption from './ExpenseOption';
import { paymentMethod, paymentTag } from '../data';
import { currencyFetchAction } from '../actions';

class AddExpenseBar extends Component {
  componentDidMount() {
    const { currencyFetch } = this.props;
    currencyFetch();
  }

  render() {
    const { currencies } = this.props;
    const currenciesArray = Object.keys(currencies);
    currenciesArray.splice(currenciesArray.indexOf('USDT'), 1);
    return (
      <div>
        <ExpenseInput
          labelContent="Valor"
          type="number"
          name="expense-value"
        />
        <ExpenseOption
          labelContent="Moeda"
          name="moeda"
          values={ currenciesArray }
        />
        <ExpenseOption
          labelContent="Método de pagamento"
          name="metodo-de-pagamento"
          values={ paymentMethod }
        />
        <ExpenseOption labelContent="Tag" name="tag" values={ paymentTag } />
        <ExpenseInput
          labelContent="Descrição"
          type="text"
          name="expense-description"
        />
        <button type="button">Adicionar Despesa</button>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencyFetch: () => dispatch(currencyFetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseBar);

AddExpenseBar.propTypes = {
  currencyFetch: PropTypes.func,
  currencies: PropTypes.object,
}.isRequired;
