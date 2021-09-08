import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestThunk, requestAdd } from '../actions';
import Input from '../component/inputs';

let soma = 0;

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: "Hot Dog",
      currency: "USD",
      method: "Dinheiro",
      tag: "Alimentação",
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleClick() {
    const { request, saveGlobal } = this.props;
    // request();
    saveGlobal(this.state);
    soma = 187.12;
    // this.setState({
    //   soma,
    // });
  }

  render() {
    const { email } = this.props;
    // const { gastoTotal } = this.state;
    return (
      // "id": 0,
      // "value": "3",
      // "description": "Hot Dog",
      // "currency": "USD",
      // "method": "Dinheiro",
      // "tag": "Alimentação",
      // "exchangeRates": {
      <div>
        <div>
          <p data-testid="email-field">{ `Usuario: ${email}` }</p>
          <p data-testid="header-currency-field">{ `Cambio: BRL` }</p>
          <p data-testid="total-field">{ `Gasto Total: ${soma}` }</p>
        </div>
        <form>
          <Input onChange={ this.handleChange } />
          <label htmlFor="method">
            Método de pagamento:
            <select id="method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <input type='submit' onClick={ this.handleClick } value='Adicionar despesa' />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  request: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(requestThunk()),
  saveGlobal: (payload) => dispatch(requestAdd(payload)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
