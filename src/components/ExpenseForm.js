import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../actions';

import Input from './Input';
import Select from './Select';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: '',
      description: '',
      currency: 'USD',
      paymentMethod: paymentMethods[0],
      tag: tags[0],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
    console.log(target.value);
  }

  render() {
    const { expenses, description, currency, paymentMethod, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <Input
            type="number"
            label="Valor"
            name="expenses"
            value={ expenses }
            onChange={ this.handleChange }
          />
          <Input
            label="Descrição"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <Select
            label="Moeda"
            name="currency"
            options={ currencies }
            value={ currency }
            onChange={ this.handleChange }
          />
          <Select
            label="Método de pagamento"
            name="paymentMethod"
            options={ paymentMethods }
            value={ paymentMethod }
            onChange={ this.handleChange }
          />
          <Select
            label="Tag"
            name="tag"
            options={ tags }
            value={ tag }
            onChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
