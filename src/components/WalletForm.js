import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectCurrencies from './SelectCurrencies';
import SelectPaymentType from './SelectPaymentType';
import SimpleInput from './SimpleInput';
import SelectTagType from './SelectTagType';
import { setValue, setDescripton, setExchangerates, setExpenses } from '../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { expense, setExchangeratesFunc, allExpenses, setExpensesFunc } = this.props;
    const newExpense = { ...expense, id: allExpenses.length };
    const expenses = allExpenses.concat(newExpense);
    setExchangeratesFunc();
    setExpensesFunc(expenses);
  }

  render() {
    const { setValueFunc, setDescriptonFunc } = this.props;

    return (
      <form>
        <SimpleInput updateState={ setValueFunc } label="Valor:" id="input-value" />
        <SimpleInput
          updateState={ setDescriptonFunc }
          label="Descrição:"
          id="input-description"
        />
        <SelectCurrencies />
        <SelectPaymentType />
        <SelectTagType />
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  setValueFunc: PropTypes.func,
  setDescriptonFunc: PropTypes.func,
}.isRequired;

const mapStateToProps = ({ wallet, expense }) => ({
  expense,
  allExpenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setValueFunc: (value) => dispatch(setValue(value)),
  setDescriptonFunc: (value) => dispatch(setDescripton(value)),
  setExchangeratesFunc: () => dispatch(setExchangerates()),
  setExpensesFunc: (newExpense) => dispatch(setExpenses(newExpense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
