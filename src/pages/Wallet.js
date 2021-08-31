import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMoney, getCurrencies } from '../actions';
import Selects from './Selects';
import TableExchanges from './TableExchanges';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.buscaMoedas = this.buscaMoedas.bind(this);
    this.createOptions = this.createOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitInfos = this.submitInfos.bind(this);
    this.calculateExchanges = this.calculateExchanges.bind(this);
  }

  componentDidMount() {
    this.buscaMoedas();
  }

  async buscaMoedas() {
    const { saveCurrencies } = this.props;
    const moedasAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const moedasJson = await moedasAPI.json();
    const moedas = Object.keys(moedasJson).filter((moeda) => moeda !== 'USDT');
    saveCurrencies(moedas);
  }

  createOptions() {
    const { currencies } = this.props;
    return (
      currencies.map((moeda, index) => (
        <option
          key={ index }
          value={ moeda }
        >
          {moeda}
        </option>
      ))
    );
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async submitInfos() {
    const { saveValues } = this.props;
    const { id, value, description, currency, tag, method } = this.state;
    const filteredState = { id, value, description, currency, tag, method };
    saveValues(filteredState);
    this.setState((state) => ({
      id: state.id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  calculateExchanges() {
    const { exchanges } = this.props;
    let sum = '0.00';
    if (exchanges.length > 0) {
      const numbers = exchanges.map(({ value, currency, exchangeRates }) => (
        exchangeRates[currency].ask * parseFloat(value)
      ));
      sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue);
      return sum.toFixed(2);
    }
    return sum;
  }

  render() {
    const { userEmail } = this.props;
    const { value, description, currency, tag, method } = this.state;
    return (
      <div>
        <header>
          <p data-testid="email-field">{`Email: ${userEmail}`}</p>
          <p data-testid="total-field">{`R$ ${this.calculateExchanges()}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input
              placeholder="Apenas Numeros"
              value={ value }
              type="number"
              name="value"
              id="valor"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="describe">
            Descrição
            <input
              value={ description }
              type="text"
              name="description"
              id="describe"
              onChange={ this.handleChange }
            />
          </label>
          <Selects
            createOptions={ this.createOptions }
            handleChange={ this.handleChange }
            currency={ currency }
            method={ method }
            tag={ tag }
          />
          <button
            type="button"
            onClick={ this.submitInfos }
          >
            Adicionar despesa
          </button>
        </form>
        <TableExchanges />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  exchanges: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveValues: (state) => dispatch(fetchMoney(state)),
  saveCurrencies: (state) => dispatch(getCurrencies(state)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveValues: PropTypes.func.isRequired,
  saveCurrencies: PropTypes.func.isRequired,
  exchanges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
