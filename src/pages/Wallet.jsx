import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWalletValue } from '../actions/index';
import Input from '../components/Input';
import Select from '../components/Select';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: {
        expenses: [],
      },
      expense: {
        valor: 0,
        descricao: '',
        moeda: 'USD',
        pagamento: 'Dinheiro',
        tag: 'Alimentação',
      },
      despesa: 0,
      counter: 0,
      formaPg: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      category: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
      moedas: ['USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC',
        'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
    this.updateDespesas = this.updateDespesas.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const { wallet: { currencies } } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      cotacao: currencies[0],
    }));
  }

  handleChange(e) {
    const { counter, cotacao } = this.state;
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      expense: {
        ...prevState.expense,
        id: counter,
        [name]: value,
        exchangeRates: cotacao,
      },
    }));
  }

  addExpenses() {
    const { wallet: { expenses }, expense, counter } = this.state;
    const moedaSelect = expense.moeda;
    this.updateDespesas(moedaSelect, expense.valor);
    expenses.push(expense);
    const newC = counter + 1;
    this.setState((prevState) => ({ ...prevState,
      expense: {
        valor: 0,
        descricao: '',
        moeda: 'USD',
        pagamento: 'Dinheiro',
        tag: 'Lazer',
      },
      counter: newC }));
  }

  updateDespesas(moedaSelect, valor) {
    const { despesa, cotacao } = this.state;
    const { dispatchSetWalletValue } = this.props;
    const moeda = cotacao[moedaSelect];
    this.setState((prevState) => ({
      ...prevState,
      despesa: despesa + Number((valor * moeda.bid)),
    }));
    dispatchSetWalletValue(this.state);
  }

  render() {
    const { user: { email } } = this.props;
    const { despesa, formaPg, category, moedas } = this.state;
    return (
      <div className="wallet">
        <Header email={ email } despesa={ despesa } />
        <form className="form">
          <Input
            label="Valor"
            name="valor"
            onChange={ this.handleChange }
          />
          <Input
            label="Descrição"
            name="descricao"
            onChange={ this.handleChange }
          />
          <Select
            label="Moeda"
            name="moeda"
            ops={ moedas }
            onChange={ this.handleChange }
          />
          <Select
            label="Método de pagamento"
            name="pagamento"
            ops={ formaPg }
            onChange={ this.handleChange }
          />
          <Select
            label="Tag"
            name="tag"
            ops={ category }
            onChange={ this.handleChange }
          />
          <button type="button" onClick={ this.addExpenses }>Adicionar despesa</button>
        </form>
        <Table />
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.objectOf(PropTypes.string).isRequired,
  dispatchSetWalletValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.reducerUser.user,
  wallet: state.reducerWallet.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetWalletValue: (payload) => dispatch(setWalletValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
