import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Label from '../Label';

import payforms from '../../data/payformData';
import tags from '../../data/tagsData';
import { editExpense as editExpenseAction } from '../../actions/index';

class EditForm extends Component {
  constructor(props) {
    super(props);

    const expense = props.expenses.find(({ id }) => id === props.idToEdit);
    this.state = {
      ...expense,
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendExpense = this.sendExpense.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  sendExpense() {
    const { editExpense } = this.props;
    editExpense({ ...this.state });
  }

  renderPayform(method) {
    return (
      <label htmlFor="method" className="select-method">
        Método de pagamento:
        {' '}
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ this.handleChange }
        >
          { payforms.map(({ id, label }) => (
            <option value={ label } key={ id }>{ label }</option>
          ))}
        </select>
      </label>
    );
  }

  renderCurrency(currency) {
    const { currencies } = this.props;
    const currenciesList = Object.keys(currencies);
    return (
      <label htmlFor="currency" className="select-currency">
        Moeda:
        {' '}
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { currenciesList.map((currencyItem) => (
            <option key={ currencyItem } value={ currencyItem }>{currencyItem}</option>
          ))}
        </select>
      </label>
    );
  }

  renderTag(tag) {
    return (
      <label htmlFor="tag" className="select-tag">
        Tag:
        {' '}
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          { tags.map(({ id, label }) => (
            <option value={ label } key={ id }>{ label }</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { value, method, tag, description, currency } = this.state;
    return (
      <form className="form">
        <div className="row">
          <Label
            text="Valor: "
            type="text"
            name="value"
            placeholder="R$0,00"
            value={ value }
            onChange={ this.handleChange }
            className="clean"
          />
        </div>
        { this.renderCurrency(currency) }
        { this.renderPayform(method) }
        { this.renderTag(tag) }
        <div className="row">
          <Label
            text="Descrição: "
            className="clean"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </div>
        <button
          type="button"
          onClick={ () => this.sendExpense() }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

EditForm.propTypes = {
  currencies: propTypes.objectOf(propTypes.object),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies[0],
  expenses: wallet.expenses,
  idToEdit: wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (state) => dispatch(editExpenseAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
