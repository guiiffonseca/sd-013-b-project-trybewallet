import React from 'react';

class WalletForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      coin: '',
      payMethod: '',
      expenseType: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { value, description, coin, payMethod, expenseType } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select id="coin" value={ coin } onChange={ this.handleChange }>
            <option value="sp">São Paulo</option>
          </select>
        </label>
        <label htmlFor="pay-method">
          Método de pagamento:
          <select id="pay-method" value={ payMethod } onChange={ this.handleChange }>
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenses">
          Tag:
          <select id="expenses" value={ expenseType } onChange={ this.handleChange }>
            <option value="alimentção">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForms;
