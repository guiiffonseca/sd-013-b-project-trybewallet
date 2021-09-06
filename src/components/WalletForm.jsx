import React from 'react';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  currencyInput(currency) {
    const { currencies } = this.props;
    return (
      <label htmlFor="input-currency">
        Moeda
        <select
          name="currency"
          id="input-currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { currencies.map((item) => (
            <option value={ item[0] } key={ item[0] }>{item[0]}</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { currency } = this.state;
    return (
      <div className="main-form-wallet">
        <form>
          <label htmlFor="input-value">
            Valor
            <input
              type="text"
              id="input-value"
            />
          </label>
          <label htmlFor="input-desc">
            Descrição
            <input
              type="text"
              id="input-desc"
            />
          </label>

          { this.currencyInput(currency) }

          <label htmlFor="input-payment">
            Método de pagamento
            <select name="payment" id="input-payment">
              <option value="money">Dinheiro</option>
              <option value="credCard">Cartão de crédito</option>
              <option value="card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            Tag
            <select name="tag" id="input-tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispath) => ({
  getCurrencies: (payload) => dispath(getCurrenciesThunk(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
