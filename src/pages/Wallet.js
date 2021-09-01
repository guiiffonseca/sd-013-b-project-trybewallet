import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import fetchApi, { fetchForCurrency } from '../actions';

class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendToGlobal = this.sendToGlobal.bind(this);
    this.getCurrenciesCorrect = this.getCurrenciesCorrect.bind(this);
  }

  componentDidMount() {
    const { funcCurrencies } = this.props;
    funcCurrencies();
  }

  getCurrenciesCorrect() {
    const { curriencies } = this.props;
    const objWithOutUsdt = ({ USDT, ...rest }) => rest;
    const objReturned = {
      ...objWithOutUsdt(curriencies),
    };
    return objReturned;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  sendToGlobal() {
    const { funcFetch } = this.props;
    this.setState((estadoAnterior) => ({
      id: estadoAnterior.id + 1,
    }));
    funcFetch({ ...this.state });
  }

  render() {
    const correctCurr = this.getCurrenciesCorrect();
    return (
      <div>
        <Header />
        <Form handChang={ this.handleChange } correctCurrency={ correctCurr } />
        adicionar despesa
        <button
          type="button"
          onClick={ () => this.sendToGlobal() }
        >
          Adicionar despesa
        </button>
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  curriencies: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    length: PropTypes.number,
    reduce: PropTypes.func,
  }).isRequired,
  funcCurrencies: PropTypes.func.isRequired,
  funcFetch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  funcFetch: (estado) => dispatch(fetchApi(estado)),
  funcCurrencies: () => dispatch(fetchForCurrency()),
});

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  loading: wallet.isFetching,
  curriencies: wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
