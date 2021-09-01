import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectTag from '../components/SelectTag';
import Header from '../components/Header';
import SelectCoin from '../components/SelectCoin';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencys: [],
      valor: '',
      descricao: '',
      moeda: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCurrencys();
  }

  async getCurrencys() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const object = await response.json();
    const arrayCurrencys = Object.keys(object);
    this.setState({
      currencys: arrayCurrencys,
    });
  }

  handleClick() {
    const { getExpenseState } = this.props;
    const { valor, descricao, moeda, payment, tag } = this.state;
    getExpenseState({ valor, descricao, moeda, payment, tag });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.props;
    const { currencys } = this.state;
    return (
      <div>
        <Header email={ email } />
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" onChange={ this.handleChange } />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              name="description"
              id="description"
              onChange={ this.handleChange }
            />
          </label>
          <SelectCoin currencys={ currencys } funcao={ this.handleChange } />
          <label htmlFor="payment">
            Método de pagamento
            <select
              role="combobox"
              name="payment"
              id="payment"
              onChange={ this.handleChange }
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="credito" selected>
                Cartão de crédito
              </option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <SelectTag function={ this.handleChange } name="despesas" role="combobox" />
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  getExpenseState: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ email: state.user.email });

const mapDispatchToProps = (dispatch) => ({
  getExpenseState: (payload) => dispatch(submitExpenseThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
