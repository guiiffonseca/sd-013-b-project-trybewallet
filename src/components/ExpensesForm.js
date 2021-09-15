import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectOptions from './SelectOptions';

const tagOptionst = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const expenseFormsOptions = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

class ExpenseForms extends React.Component {
  constructor() {
    super();

    this.state = {
      expense: '',
      expenseDescription: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  renderSelects() {
    const { moedasArray } = this.props;
    const { currency, method, tag } = this.state;
    const currencyOptions = moedasArray;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencyOptions.map((crr) => (
              <SelectOptions info={ crr } key={ crr } />
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            {expenseFormsOptions.map((crr) => (
              <SelectOptions info={ crr } key={ crr } />
            ))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
            {tagOptionst.map((crr) => (
              <SelectOptions key={ crr } info={ crr } />
            ))}
          </select>
        </label>
      </>
    );
  }

  render() {
    const { expense, expenseDescription } = this.state;
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input
            type="number"
            name="expense"
            id="expense"
            value={ expense }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="expenseDescription">
          Descrição
          <input
            type="text"
            name="expenseDescription"
            id="expenseDescription"
            value={ expenseDescription }
            onChange={ this.handleChange }
          />
        </label>
        {this.renderSelects()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedasArray: state.wallet.currencies,
  loading: state.wallet.loading,
});

ExpenseForms.propTypes = {
  moedasArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(ExpenseForms);
