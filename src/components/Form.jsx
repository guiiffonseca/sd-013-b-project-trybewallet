import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      MethodPayment: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          vazio
        </select>
      </label>
    );
  }

  renderMethodPayment() {
    const { MethodPayment } = this.state;
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select
          name="paymentMethod"
          id="paymentMethod"
          value={ MethodPayment }
          onChange={ this.handleChange }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao-de-credito">Cartão de crédito</option>
          <option value="cartao-de-debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.renderValue() }
          { this.renderCurrency() }
          { this.renderMethodPayment() }
          { this.renderTag() }
          { this.renderDescription() }
        </form>
      </div>
    );
  }
}

export default Form;
