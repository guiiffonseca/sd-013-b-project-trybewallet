import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Inputs';
import Select from './select';
import Button from './Button';
import { expense, fetchApi } from '../actions';

class HeaderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getExchange() {
    const { allCurrency } = this.props;
    const initials = Object.keys(allCurrency);

    return initials.reduce((acc, currency) => {
      acc[currency] = allCurrency[currency];
      return acc;
    }, {});
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpense, fetchCurrency, expenses } = this.props;
    fetchCurrency();
    const exchangeRates = this.getExchange();
    const infos = { id: expenses.length, ...this.state, exchangeRates };
    addExpense(infos);
  }

  displayForm() {
    const { currency, method, tag } = this.state;
    const { allCurrency } = this.props;
    const initials = Object.keys(allCurrency);
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const motivo = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <>
        <Input
          labelText="Valor"
          type="number"
          name="value"
          handleChange={ this.handleChange }
        />
        <Input
          labelText="Descrição"
          type="text"
          name="description"
          handleChange={ this.handleChange }
        />
        <Select
          text="Moeda"
          name="currency"
          item={ initials }
          handleChange={ this.handleChange }
          value={ currency }
        />
        <Select
          text="Método de pagamento"
          name="method"
          item={ pagamento }
          handleChange={ this.handleChange }
          value={ method }
        />
        <Select
          text="Tag"
          name="tag"
          item={ motivo }
          handleChange={ this.handleChange }
          value={ tag }
        />
        <Button text="Adicionar despesa" handleClick={ this.handleClick } />
      </>
    );
  }

  render() {
    const { loading } = this.props;
    return (
      <form>
        { !loading && this.displayForm() }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  allCurrency: state.wallet.currencies[0],
  loading: state.loading.isFatching,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (infos) => dispatch(expense(infos)),
  fetchCurrency: () => dispatch(fetchApi()),
});

HeaderForm.defaultProps = {
  allCurrency: {},
};

HeaderForm.propTypes = {
  allCurrency: PropTypes.objectOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  addExpense: PropTypes.func.isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForm);
