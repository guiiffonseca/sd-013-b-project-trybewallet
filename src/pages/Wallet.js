import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import SelectMethod from '../components/SelectMethod';
import SelectTag from '../components/SelectTag';
import WalletHeader from '../components/WalletHeader';
import { fetchExchangeRates as fetchExchangeAction } from '../actions/index';
import Button from '../components/Button';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };

    this.attStateWithCurrencies = this.attStateWithCurrencies.bind(this);
    this.createCurrencieOptions = this.createCurrencieOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  async componentDidMount() {
    const requestResponse = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesArr = await requestResponse.json();
    const Arr = Object.keys(currenciesArr);
    const filteredCurrencies = Arr.filter((coins) => coins !== 'USDT');

    this.attStateWithCurrencies(filteredCurrencies);
  }

  attStateWithCurrencies(response) {
    this.setState({
      coins: response,
    });
  }

  createCurrencieOptions() {
    const { coins } = this.state;
    return (
      coins.map((coin) => (
        <option
          key={ coin }
          value={ coin }
        >
          { coin }
        </option>
      ))
    );
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async submitHandle() {
    const { submitValues } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const expenseArr = { id, value, description, currency, method, tag };
    submitValues(expenseArr);
    this.setState((state) => ({
      id: state.id + 1,
    }));
  }

  totalExpenses() {
    const { expenses } = this.props;
    return (expenses
      .reduce((acc, curr) => acc + curr.value * curr.exchangeRates[curr.currency].ask, 0)
      .toFixed(2));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <main>
        <WalletHeader totalValue={ this.totalExpenses } />
        <div>
          <form>
            <Input
              htmlId="value-input"
              labelText="Valor"
              type="number"
              onChange={ this.handleChange }
              value={ value }
              name="value"
            />
            <TextArea
              htmlId="description-textarea"
              labelText="Descrição"
              onChange={ this.handleChange }
              value={ description }
              name="description"
            />
            <Select
              htmlId="currencie-select"
              createOptions={ this.createCurrencieOptions }
              onChange={ this.handleChange }
              value={ currency }
              name="currency"
            />
            <SelectMethod
              htmlId="paymentMethod-select"
              onChange={ this.handleChange }
              value={ method }
              name="method"
            />
            <SelectTag
              htmlId="expenseTag-select"
              onChange={ this.handleChange }
              value={ tag }
              name="tag"
            />
            <Button
              text="Adicionar despesa"
              onClick={ this.submitHandle }
            />
          </form>
        </div>
      </main>
    );
  }
}

Wallet.propTypes = {
  submitValues: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  currencies: wallet.currencies,
}
);

const mapDispatchToProps = (dispatch) => ({
  submitValues: (state) => dispatch(fetchExchangeAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
