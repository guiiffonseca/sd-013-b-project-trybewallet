import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpense from './AddExpense';
import { fetchCurrencies, fetchExpenses } from '../actions/index';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };

    this.handleState = this.handleState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { sendExpense } = this.props;
    sendExpense(this.state);
    this.setState(({ id }) => ({
      id: id + 1,
    }));
  }

  reducerSoma(array) {
    const expenses = array.map((expense) => Number(expense.value)
      * Number(expense.exchangeRates[expense.currency].ask));
    return expenses.reduce((acc, value) => acc + value, 0);
  }

  render() {
    const { userLogged, currencies, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <h3 data-testid="email-field">
          Usuário logado:
          {' '}
          {userLogged}
        </h3>
        <h3>
          Despesa total:
          {/* { console.log(expenses.map((expense) => parseInt(expense.valor, 0))
            .reduce((acc, value) => acc + value, 0)) } */}
          <span data-testid="total-field">{this.reducerSoma(expenses)}</span>
        </h3>
        <h3>
          Câmbio utlizado:
          {' '}
          <span data-testid="header-currency-field">BRL</span>
        </h3>
        <AddExpense
          currencies={ currencies }
          handleState={ this.handleState }
          valor={ value }
          desc={ description }
          moeda={ currency }
          pagamento={ method }
          categoria={ tag }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurrencies()),
  sendExpense: (state) => dispatch(fetchExpenses(state)),
});

const mapStateToProps = (state) => ({
  userLogged: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.defaultProps = {
  expenses: [],
};

Wallet.propTypes = {
  userLogged: PropTypes.string.isRequired,
  fetchApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  sendExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
