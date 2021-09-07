import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency, addExpense } from '../actions';
import WalletHeader from '../components/WalletHeader';
import WalletSelect from '../components/WalletSelect';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpenses } = this.props;
    addExpenses(this.state);
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    return (
      <div>
        <WalletHeader />
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="text"
              name="value"
              id="valor"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input
              type="text"
              name="description"
              id="descrição"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <WalletSelect
            optionCreator={ this.optionCreator }
            handleChange={ this.handleChange }
            currency={ currency }
            method={ method }
            tag={ tag }
          />
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (state) => dispatch(addExpense(state)),
  addCurrencies: () => dispatch(fetchCurrency()),
});

export default connect(null, mapDispatchToProps)(Wallet);
