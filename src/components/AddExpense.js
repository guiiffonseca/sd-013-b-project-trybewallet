import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrenciesThunk } from '../actions';

class AddExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCurrency: 'USD',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { value } }) {
    this.setState({ selectedCurrency: value });
  }

  render() {
    const { currencies = [] } = this.props;
    const { selectedCurrency } = this.state;
    return (
      <form action="">
        <label htmlFor="value-input">
          Valor
          <input type="text" id="value-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input type="text" id="description-input" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            value={ selectedCurrency }
            onChange={ this.handleChange }
          >
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select name="paymentMethod" id="payment-method">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="food">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="healthcare">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

AddExpense.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
