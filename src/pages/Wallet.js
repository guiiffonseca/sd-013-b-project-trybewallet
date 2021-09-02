import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpensesThunk } from '../actions';
import Header from '../Components/header';

let cont = 0;

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.format = this.format.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    let object = {};
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const updatedate = [...Object.values(data)];
        updatedate.splice(1, 1);
        this.setState({ currencies: updatedate });
        object = data;
      });
    return object;
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  format() {
    const { value, description, currency, method, tag } = this.state;
    const { add } = this.props;
    const expenses = {
      id: cont,
      value,
      description,
      currency,
      method,
      tag,
    };
    cont += 1;
    add(expenses);
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="value">
            Valor:
            <input name="value" type="number" id="value" onChange={ this.handleChange } />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              name="description"
              type="text"
              id="description"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select name="currency" id="currency" onChange={ this.handleChange }>
              { currencies.map(
                (currency, index) => <option key={ index }>{ currency.code }</option>,
              )}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select name="method" id="payment" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ () => this.format() }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchtoProps = (dispatch) => ({
  add: (payload) => dispatch(addExpensesThunk(payload)),
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  add: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Wallet);
