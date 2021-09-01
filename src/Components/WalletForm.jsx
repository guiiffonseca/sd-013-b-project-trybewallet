import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormSelects from './FormSelects';
import { addExpenseCall as addExpenseAction } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Lazer',
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendExpense = this.sendExpense.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  sendExpense() {
    const { addExpense } = this.props;
    addExpense(this.state);
  }

  render() {
    const { currencys: curr } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div id="form-div">
        <form>
          <label htmlFor="expense-value">
            Valor:
            <input
              type="text"
              name="value"
              id="expense-value"
              onChange={ this.handleChange }
              value={ value }
            />
          </label>
          <label htmlFor="expense-description">
            Descrição:
            <input
              type="text"
              name="description"
              id="expense-description"
              onChange={ this.handleChange }
              value={ description }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              onChange={ this.handleChange }
              value={ currency }
            >
              {curr && curr.map((cur) => (
                <option key={ cur.code } value={ cur.code }>{cur.code}</option>
              ))}
            </select>
          </label>
        </form>
        <FormSelects
          handleChange={ this.handleChange }
          method={ method }
          tag={ tag }
        />
        <button onClick={ this.sendExpense } type="button">Adicionar Despesa</button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencys: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencys: state.wallet.currencys,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(addExpenseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
