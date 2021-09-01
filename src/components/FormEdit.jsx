import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionEdit } from '../actions';

class FormEdit extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendToGlobal = this.seToGlobal.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  seToGlobal() {
    const { exchangeRates } = this.state;
    const { funcEdit, expenses } = this.props;
    this.setState({ exchangeRates: expenses });
    funcEdit(this.state, exchangeRates);
  }

  render() {
    const { correctCurrency } = this.props;
    const corr = Object.keys(correctCurrency);
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            name="value"
            type="number"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" onChange={ this.handleChange }>
            {corr.filter((element) => element !== 'USDT').map((element, index) => (
              <option key={ index }>{element}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" onChange={ this.handleChange }>
            {method.map((element, index) => <option key={ index }>{element}</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Tag
          <select name="tag" onChange={ this.handleChange }>
            {tag.map((element, index) => <option key={ index }>{element}</option>)}
          </select>
        </label>
        <button type="button" onClick={ () => this.seToGlobal() }>Editar despesa</button>
      </div>
    );
  }
}

FormEdit.propTypes = {
  correctCurrency: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
  funcEdit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses[0].exchangeRates,
  correctCurrency: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  funcEdit: (estado, curr) => dispatch(actionEdit(estado, curr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
