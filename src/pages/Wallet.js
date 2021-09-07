import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import trybe from '../images/trybe.png';
import '../images/images.css';
// import store from '../redux/store';

class Wallet extends React.Component {
  constructor() {
    super();
    this.calculateExpenses = this.calculateExpenses.bind(this);
    this.addTag = this.addTag.bind(this);
    this.addCurrencies = this.addCurrencies.bind(this);
    this.state = {
      // isLoaded: false,
      isCalculating: true,
      currencies: [],
    };
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((result) => this.setState({
        currencies: [result],
      }))
      .catch((err) => console.log(err, 'error'));
    // console.log(store.getState());
  }

  // async fetchAPI() {
  //   const fetchResult = await fetch('https://economia.awesomeapi.com.br/json/all')
  //     .then((response) => response.json())
  //     .catch((err) => console.log(err, 'error'));
  //   this.setState({
  //     data: [fetchResult],
  //   });
  // }

  calculateExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, cv) => acc + cv);
    this.setState({
      isCalculating: false,
    });
    return totalExpenses;
  }

  addTag() {
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  addCurrencies() {
    const { currencies } = this.state;
    // console.log(currencies);
    if (currencies.length > 0) {
      const currency = Object.values(currencies[0]);
      return (
        currency.filter((element) => element.codein !== 'BRLT')
          .map(
            (element, key) => (
              <option
                key={ key }
                value={ element.code }
              >
                { element.code }
              </option>),
          )
      );
    }
    // if (currencies[0] === undefined || currencies === null) {
    //   currencies = JSON.parse(localStorage.getItem('currencies'));
    //   localStorage.setItem('currencies', JSON.stringify(currencies));
    // } else {
    //   localStorage.setItem('currencies', JSON.stringify(currencies));
    // }
    // console.log(currencies[0]);

    // const currency = Object.values(currencies[0]);
    // return (
    //   currency.filter((element) => element.codein !== 'BRLT')
    //     .map((element, key) => {
    //       console.log(key);
    //       return <option key={ key } value={ element.code }>{ element.code }</option>;
    //     })
    // );
  }

  render() {
    const { isCalculating } = this.state;
    const { email } = this.props;
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // }
    return (
      <header className="flexbox-container">
        <img className="main-logo" src={ trybe } alt="Trybe logo" />
        <div data-testid="email-field">
          {/* { console.log(currencies) }
          { console.log('LINNHA 100')} */}
          {email}
        </div>
        <div data-testid="total-field">
          { isCalculating
            ? 0
            : this.calculateExpenses }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" />
          </label>
          <label htmlFor="select">
            Moeda:
            <select id="select">
              {this.addCurrencies()}
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento:
            <select id="paymentMethod">
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </label>
          {this.addTag()}
        </form>
      </header>
    );
  }
}

Wallet.propTypes = {
  // currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number),
};

Wallet.defaultProps = {
  expenses: [0],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
