import React from 'react';
import { connect } from 'react-redux';

import { getCurrenciesThunk } from '../actions/index';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalCurrencies: [],
    };
    this.insertOptions = this.insertOptions(this);
  }

  componentDidMount() {
    this.getCurrenciesToState();
  }

  async getCurrenciesToState() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  insertOptions() {
    // return { currencies.map((item, index) => <option key={ index }>{ item }</option>) };
  }

  render() {
    const { globalCurrencies } = this.state;
    return (
      <div className="main-form-wallet">
        <form>
          <label htmlFor="input-value">
            Valor
            <input
              type="text"
              id="input-value"
            />
          </label>
          <label htmlFor="input-desc">
            Descrição
            <input
              type="text"
              id="input-desc"
            />
          </label>
          <label htmlFor="input-currency">
            Moeda
            <select name="currency" id="input-currency">
              { globalCurrencies.map((item, index) => (
                <option key={ index } value={ item }>{ item }</option>
              ))}
            </select>
          </label>
          <label htmlFor="input-payment">
            Método de pagamento
            <select name="payment" id="input-payment">
              <option value="money">Dinheiro</option>
              <option value="credCard">Cartão de crédito</option>
              <option value="card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            Tag
            <select name="tag" id="input-tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (payload) => dispatch(getCurrenciesThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
