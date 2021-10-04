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
      atualField: [],
    };

    this.getCurrenciesAPI = this.getCurrenciesAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateExpenses = this.calculateExpenses.bind(this);
  }

  componentDidMount() {
    this.getCurrenciesAPI();
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
    // console.log(fieldState, Number(expensesValue), atualCurrency.ask);
    return Number(
      fieldState + Number(expensesValue) * Number(atualCurrency.ask),
    ).toFixed(2);
  }

  handleClick() {
    this.getCurrenciesAPI();
    const { id, atualCurrency, allCurrencies, fieldState } = this.state;
    const { addExpenses } = this.props;
    let { totalField } = this.props;
    const { value } = document.querySelector('#valor');
    const atualField = this.calculateExpenses(
      0,
      value,
      allCurrencies[atualCurrency],
    );

    totalField = this.calculateExpenses(
      fieldState,
      value,
      allCurrencies[atualCurrency],
    );

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

    this.setState((prevState) => ({
      id: prevState.id + 1,
      fieldState: Number(totalField),
      atualField: [...prevState.atualField, atualField],
    }));
    addExpenses({ atualCurrency, expenses });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleClick, handleChange } = this;
    const { email, currencies } = this.props;
    const { id, currenciesList, atualCurrency, fieldState, atualField } = this.state;

    return (
      <div>
        <WalletHeader
          id={ id }
          email={ email }
          currencies={ currencies }
          totalField={ fieldState }
        />
        <form>
          <Input
            handleChange={ handleChange }
            labelDescrption="Valor"
            name="valor"
            id="valor"
          />
          <Input
            handleChange={ handleChange }
            labelDescrption="Descrição"
            name="descrição"
            id="descrição"
          />
          <SelectCurrencies
            atualCurrency={ atualCurrency }
            handleChange={ handleChange }
            currenciesList={ currenciesList }
          />
          <SelectPaymentMethod handleChange={ handleChange } />
          <SelectTag handleChange={ handleChange } />
          <button type="button" onClick={ handleClick }>
            Adicionar despesa
          </button>
          <TableWallet atualField={ atualField } />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf().isRequired,
  addExpenses: PropTypes.func.isRequired,
  totalField: PropTypes.number.isRequired,
};

const mapStateToProps = ({ user, wallet }) => {
  const { email } = user;
  const { currencies, totalField } = wallet;
  return {
    email,
    currencies,
    totalField,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (payload) => dispatch(addExpensesEvent(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
