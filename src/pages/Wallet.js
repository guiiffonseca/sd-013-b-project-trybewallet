import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectTag from '../components/SelectTag';
import Header from '../components/Header';
import SelectCoin from '../components/SelectCoin';
import { submitExpenseThunk } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencys: [],
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCurrencys();
  }

  async getCurrencys() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const object = await response.json();
    const arrayCurrencys = Object.keys(object);
    this.setState({
      currencys: arrayCurrencys,
    });
  }

  handleClick() {
    const { getExpenseState } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    this.setState((prev) => ({
      ...prev,
      id: id + 1,
    }));
    getExpenseState({ id, value, description, currency, method, tag });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, expenses } = this.props;
    const { currencys } = this.state;
    return (
      <div>
        <Header email={ email } expenses={ expenses } />
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" onChange={ this.handleChange } />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              name="description"
              id="description"
              onChange={ this.handleChange }
            />
          </label>
          <SelectCoin currencys={ currencys } funcao={ this.handleChange } />
          <label htmlFor="method">
            Método de pagamento
            <select
              role="combobox"
              name="method"
              id="method"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <SelectTag funcao={ this.handleChange } />
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  getExpenseState: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenseState: (payload) => dispatch(submitExpenseThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
