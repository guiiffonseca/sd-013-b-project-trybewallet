import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputValueForm from './InputValueForm';
import InputDescriptionForm from './InputDescriptionForm';
import SelectCurrencyForm from './SelectCurrencyForm';
import SelectPaymentForm from './SelectPaymentForm';
import SelectTagForm from './SelectTagForm';

import { selectedCurrency as selectedCurrencyAction,
  fetchCurrencies as fetchCurrenciesAction,
  addExpenses as addExpensesAction } from '../actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleClick() {
    const { addExpenses } = this.props;
    addExpenses(this.state);
    this.setState({ // reseta os campos value e description
      description: '',
      value: 0,
    });
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag } = this.state;
    const { currencies, loadingCurrencies } = this.props;

    return (
      <div>
        <form>
          <InputValueForm
            value={ value }
            handleChange={ this.handleChange }
          />
          <InputDescriptionForm
            description={ description }
            handleChange={ this.handleChange }
          />
          <SelectCurrencyForm
            currencies={ currencies }
            loadingCurrencies={ loadingCurrencies }
            value={ currency }
            handleChange={ this.handleChange }
          />
          <SelectPaymentForm
            value={ method }
            handleChange={ this.handleChange }
          />
          <SelectTagForm
            value={ tag }
            handleChange={ this.handleChange }
          />
          <button
            name="Adicionar despesa"
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  id: wallet.expenses,
  currencies: wallet.currencies,
  loadingCurrencies: wallet.loadingCurrencies,
});

const mapDispatchtoProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesAction()),
  selectedCurrency: (state) => dispatch(selectedCurrencyAction(state)),
  addExpenses: (state) => dispatch(addExpensesAction(state)),
});

WalletForm.propTypes = {
  wallet: PropTypes.shape(PropTypes.shape()),
}.isRequired;

export default connect(mapStateToProps, mapDispatchtoProps)(WalletForm);
