import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkAPI, addExpenseThunk } from '../actions';
import Header from '../components/Header';

const INITIAL_STATE = {
  value: '0',
  description: '',
  currency: 'USD',
  method: 'Cartão de crédito',
  tag: 'Lazer',
  id: 0,
  totalValue: 0,
};
const number3 = 3;

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { saveCoins } = this.props;
    saveCoins('https://economia.awesomeapi.com.br/json/all');
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatchSetValue } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    dispatchSetValue({
      id,
      value,
      description,
      currency,
      method,
      tag,
    });
    this.setState((estadoAnterior) => ({
      id: estadoAnterior.id + 1,
    }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderForm(currencies) {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select onChange={ this.handleChange } name="currency" id="currency">
            {Object.keys(currencies)
              .filter((moeda) => (moeda.length <= number3))
              .map((moeda) => <option value={ moeda } key={ moeda }>{moeda}</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select onChange={ this.handleChange } name="method" id="method">
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleChange } name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }

  renderTable() {
    const { expenses } = this.props;
    return expenses.map((
      { value, description, currency, method, tag, id, exchangeRates },
    ) => (
      <tr key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ currency }</td>
        <td>{ (exchangeRates[currency].name.split('/')[0]) }</td>
        <td>{ (parseFloat(exchangeRates[currency].ask)).toFixed(2) }</td>
        <td>
          {
            (parseFloat(value) * parseFloat(exchangeRates[currency].ask)).toFixed(2)
          }
        </td>
        <td>Real</td>
      </tr>
    ));
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        { this.renderForm(currencies) }
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { this.renderTable() }
          </tbody>
        </table>
      </div>
    );
  }
}

Wallet.propTypes = {
  saveCoins: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatchSetValue: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveCoins: (url) => dispatch(thunkAPI(url)),
  dispatchSetValue: (localStorage) => dispatch(addExpenseThunk(localStorage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
