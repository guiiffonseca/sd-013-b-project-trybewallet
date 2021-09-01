import React from 'react';
import CoinApiFilter from './CoinApiFilter';

class WalletForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      paymethod: '',
      expenses: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { value, description, paymethod, expenses } = this.state;
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
        <CoinApiFilter />
        <label htmlFor="paymethod">
          Método de pagamento:
          <select id="paymethod" value={ paymethod } onChange={ this.handleChange }>
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenses">
          Tag:
          <select id="expenses" value={ expenses } onChange={ this.handleChange }>
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
