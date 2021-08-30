import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseInput from './ExpenseInput';
import ExpenseOption from './ExpenseOption';
import { paymentMethodArray, paymentTagArray } from '../data';
import { currencyFetchAction, saveExpenseAction } from '../actions';
import AddExpenseButton from './AddExpenseButton';

class AddExpenseBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: paymentMethodArray[0],
      tag: paymentTagArray[0],
      description: '',
      exchangeRates: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateLocalCurrencyState = this.updateLocalCurrencyState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { currencyFetch } = this.props;
    await currencyFetch();
    this.updateLocalCurrencyState();
  }

  updateLocalCurrencyState() {
    const { currencies } = this.props;
    this.setState({
      currency: Object.keys(currencies)[0],
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async handleClick() {
    const { saveExpense, currencyFetch } = this.props;
    await currencyFetch();
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies });
    saveExpense(this.state);
    this.setState((previState) => ({ id: previState.id + 1 }));
  }

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    const currenciesArray = Object.keys(currencies);
    currenciesArray.splice(currenciesArray.indexOf('USDT'), 1);
    return (
      <div>
        <ExpenseInput
          labelContent="Valor"
          type="number"
          name="value"
          handleChange={ this.handleChange }
          value={ value }
        />
        <ExpenseOption
          labelContent="Moeda"
          name="currency"
          values={ currenciesArray }
          handleChange={ this.handleChange }

        />
        <ExpenseOption
          labelContent="Método de pagamento"
          name="method"
          values={ paymentMethodArray }
          handleChange={ this.handleChange }

        />
        <ExpenseOption
          labelContent="Tag"
          name="tag"
          values={ paymentTagArray }
          handleChange={ this.handleChange }
        />
        <ExpenseInput
          labelContent="Descrição"
          type="text"
          name="description"
          handleChange={ this.handleChange }
          value={ description }

        />
        <AddExpenseButton handleClick={ this.handleClick } />
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencyFetch: () => dispatch(currencyFetchAction()),
  saveExpense: (payload) => dispatch(saveExpenseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseBar);

AddExpenseBar.propTypes = {
  currencyFetch: PropTypes.func,
  currencies: PropTypes.object,
}.isRequired;
