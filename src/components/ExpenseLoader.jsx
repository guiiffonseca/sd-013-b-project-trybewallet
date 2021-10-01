import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses } from '../actions';

// const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
const payOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newExpense: [], // enviar objeto
    };
    // this.fetchAPI = this.fetchAPI.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /*
  fetchAPI() {
    return ENDPOINT;
  } */

  onSubmit(e) {
    e.preventDefault();
    const { addExpense } = this.props;
    const { newExpense } = this.state;
    addExpense(newExpense);
  }

  showCurrOptions() {
    const { currencies } = this.props;
    return (
      currencies.map((element) => (
        <option key={ element } value={ `${element}` }>{element}</option>
      ))
    );
  }

  showPayOptions() {
    return (
      payOptions.map((element) => (
        <option key={ element } value={ `${element}` }>{element}</option>
      ))
    );
  }

  showTagOptions() {
    return (
      tag.map((element) => (
        <option key={ element } value={ `${element}` }>{element}</option>
      ))
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" />
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" id="describe" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">{ this.showCurrOptions() }</select>
        </label>
        <label htmlFor="payChoose">
          Método de pagamento
          <select id="payChoose">{ this.showPayOptions() }</select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">{ this.showTagOptions() }</select>
        </label>
        <button type="submit" onClick={ this.onSubmit }>Enviar</button>
      </form>
    );
  }
}

ExpenseLoader.propTypes = {
  // expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  // expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(getExpenses(expense)),
  // addImage: (image) => dispatch(getImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseLoader);
