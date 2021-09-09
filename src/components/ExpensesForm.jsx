import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { currenciesFromApi, getExchangeFromAPI, getExpenses } from '../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.currency = this.currency.bind(this);
    this.method = this.method.bind(this);
    this.tag = this.tag.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { currencyList } = this.props;
    currencyList();
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  async handleClick() {
    const { getRates } = this.props;
    const expenses = this.state;
    getRates(expenses);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  currency(currencies) {
    const { currency } = this.state;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select
          id="moeda"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
        >
          {
            currencies.map((curr) => (
              <option
                value={ curr }
                key={ curr }
              >
                {curr}
              </option>
            ))
          }
        </select>
      </label>
    );
  }

  method() {
    const { method } = this.state;
    return (
      <label htmlFor="metodo">
        Método de pagamento:
        <select name="method" id="metodo" onChange={ this.handleChange } value={ method }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag" onChange={ this.handleChange } value={ tag }>
          <option name="alimentação">Alimentação</option>
          <option name="lazer">Lazer</option>
          <option name="trabalho">Trabalho</option>
          <option name="transporte">Transporte</option>
          <option name="saude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            id="descricao"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        { this.currency(currencies) }
        { this.method() }
        { this.tag() }

        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencyList: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getRates: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  currencyList: () => dispatch(currenciesFromApi()),
  expensesList: (payload) => dispatch(getExpenses(payload)),
  getRates: (state) => dispatch(getExchangeFromAPI(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
