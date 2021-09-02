import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import Select from '../components/Select';
import { setCurrenciesCodeThunk, setExpensesThunk } from '../actions';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrenciesCode } = this.props;

    getCurrenciesCode();
  }

  getTotalExpenses() {
    const { expenses } = this.props;

    return expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const convertedValue = value * exchangeRates[currency].ask;

      return acc + convertedValue;
    }, 0);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { getExpenses, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;

    getExpenses({
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    });

    this.setState(INITIAL_STATE);
  }

  render() {
    const { email, currencies } = this.props;
    const { handleChange } = this;
    const getTotalExpenses = this.getTotalExpenses();

    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{getTotalExpenses.toFixed(2)}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form onSubmit={ (event) => event.preventDefault() }>
          <Input type="number" label="Valor" id="value" onChange={ handleChange } />
          <Input
            type="text"
            label="Descrição"
            id="description"
            onChange={ handleChange }
          />
          <Select
            label="Moeda"
            id="currency"
            options={ currencies }
            onChange={ handleChange }
          />
          <Select
            label="Método de Pagamento"
            id="method"
            options={ methods }
            onChange={ handleChange }
          />
          <Select
            label="Tag"
            id="tag"
            options={ tags }
            onChange={ handleChange }
          />
          <button type="submit" onClick={ () => this.handleClick() }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (expense) => dispatch(setExpensesThunk(expense)),
  getCurrenciesCode: () => dispatch(setCurrenciesCodeThunk()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpenses: PropTypes.func.isRequired,
  getCurrenciesCode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
