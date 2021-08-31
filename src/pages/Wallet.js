import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import thunkAPI, { addExpense } from '../actions';

const number3 = 3;

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      paymentMethod: 'cash',
      category: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { saveCoins } = this.props;
    saveCoins('https://economia.awesomeapi.com.br/json/all');
  }

  handleClick() {
    const { dispatchSetValue } = this.props;
    console.log(dispatchSetValue);
    dispatchSetValue(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          {email}
          <div data-testid="total-field">{0}</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" name="value" onChange={ this.handleChange } />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="description" id="description" onChange={ this.handleChange } />
          </label>
          <label htmlFor="currency">
            Moeda
            <select onChange={ this.handleChange } name="currency" id="currency">
              {Object.keys(currencies)
                .filter((moeda) => (moeda.length <= number3))
                .map((moeda) => <option value={ moeda } key={ moeda }>{moeda}</option>)}
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select onChange={ this.handleChange } name="paymentMethod" id="paymentMethod">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Tag:
            <select onChange={ this.handleChange } name="category" id="category">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adiconar despesa</button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  saveCoins: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  currencies: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCoins: (url) => dispatch(thunkAPI(url)),
  dispatchSetValue: (localStorage) => dispatch(addExpense(localStorage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
