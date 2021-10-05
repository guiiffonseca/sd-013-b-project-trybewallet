import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectTag from '../components/SelectTag';
import SelectPaymentMethod from '../components/SelectPaymentMethod';
import { addExpenses as addExpensesEvent } from '../actions/index';
import Input from '../components/Input';
import WalletHeader from '../components/WalletHeader';
import SelectCurrencies from '../components/SelectCurrencies';
import TableWallet from '../components/TableWallet';

const linkCrrenciesAPI = 'https://economia.awesomeapi.com.br/json/all';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      currenciesList: [],
      allCurrencies: {},
      atualCurrency: 'USD',
      fieldState: 0,
      moedaConvertida: [],
    };

    this.getCurrenciesAPI = this.getCurrenciesAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateExpenses = this.calculateExpenses.bind(this);
    this.setFieldState = this.setFieldState.bind(this);
    this.calculateTotalValue = this.calculateTotalValue.bind(this);
  }

  componentDidMount() {
    this.getCurrenciesAPI();
  }

  setFieldState(subitraiFieldSate) {
    this.setState((prevState) => {
      console.log(prevState.fieldState, subitraiFieldSate);
      return {
        fieldState: prevState.fieldState - Number(subitraiFieldSate),
      };
    });
  }

  async getCurrenciesAPI() {
    const response = await fetch(linkCrrenciesAPI);
    const object = await response.json();
    const currenciesList = Object.keys(object).filter(
      (currency) => currency !== 'USDT' && currency !== 'DOGE',
    );

    this.setState({
      currenciesList,
      allCurrencies: object,
    });
  }

  calculateExpenses(fieldState = 0, expensesValue = '0', atualCurrency) {
    // const newCurrencyValue = Number(atualCurrency.ask).toFixed(2);
    console.log(fieldState, Number(expensesValue), Number(atualCurrency.ask));
    return fieldState + Number(expensesValue) * Number(atualCurrency.ask);
  }

  calculateTotalValue() {
    const { expenses } = this.props;
    if (expenses.length !== 0) {
      const somaTotal = expenses.reduce((acc, curValue) => {
        acc += curValue.value * curValue.exchangeRates[curValue.currency].ask;
        return acc;
      }, 0);
      console.log(somaTotal);
      return somaTotal;
    }
    return 0.00;
  }

  handleClick() {
    this.getCurrenciesAPI();
    const { id, atualCurrency, allCurrencies } = this.state;
    const { addExpenses } = this.props;

    // Método de capturar os ids com o DOM para setar o estado global foi consultado do código do Amós Rodrigues
    const expenses = {
      currency: document.querySelector('#moeda').value,
      description: document.querySelector('#descrição').value,
      exchangeRates: allCurrencies,
      id,
      method: document.querySelector('#PaymentMethod').value,
      tag: document.querySelector('#tag').value,
      value: document.querySelector('#valor').value,
    };

    this.setState(
      (prevState) => ({
        id: prevState.id + 1,
      }),
      () => this.calculateTotalValue(),
    );
    addExpenses({ atualCurrency, expenses });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, currencies } = this.props;
    const { id, currenciesList, atualCurrency, moedaConvertida } = this.state;
    return (
      <div>
        <WalletHeader
          id={ id }
          email={ email }
          currencies={ currencies }
          calculateTotalValue={ this.calculateTotalValue }
        />
        <form>
          <Input
            handleChange={ this.handleChange }
            labelDescrption="Valor"
            name="valor"
            id="valor"
          />
          <Input
            handleChange={ this.handleChange }
            labelDescrption="Descrição"
            name="descrição"
            id="descrição"
          />
          <SelectCurrencies
            atualCurrency={ atualCurrency }
            handleChange={ this.handleChange }
            currenciesList={ currenciesList }
          />
          <SelectPaymentMethod handleChange={ this.handleChange } />
          <SelectTag handleChange={ this.handleChange } />
          <button type="button" onClick={ this.handleClick }>
            Adicionar despesa
          </button>
          <TableWallet
            setFieldState={ this.setFieldState }
            moedaConvertida={ moedaConvertida }
          />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf().isRequired,
  addExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = ({ user, wallet }) => {
  const { email } = user;
  const { expenses, currencies } = wallet;
  return {
    email,
    currencies,
    expenses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (payload) => dispatch(addExpensesEvent(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
