import React from 'react';

class FormularyExpenses extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    return this.setState({
      [name]: value,
    });
  }

  renderInput() {
    const { value, description } = this.state;
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </>
    );
  }

  renderSelect() {
    const { currency, method, tag } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            value={ currency }
            name="currency"
            id="currency"
            onChange={ this.handleChange }
          >
            <option value="ARS">ARS</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            value={ method }
            name="method"
            id="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select value={ tag } name="tag" id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    return (
      <form>
        {this.renderInput()}
        {this.renderSelect()}
      </form>
    );
  }
}

export default FormularyExpenses;
