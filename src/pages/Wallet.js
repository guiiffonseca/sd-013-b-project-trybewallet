import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
    };
    this.buscaMoedas = this.buscaMoedas.bind(this);
    this.createOptions = this.createOptions.bind(this);
  }

  componentDidMount() {
    this.buscaMoedas();
  }

  async buscaMoedas() {
    const moedasAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const moedasJson = await moedasAPI.json();
    const moedas = Object.keys(moedasJson).filter((moeda) => moeda !== 'USDT');
    this.setState({
      moedas,
    });
  }

  createOptions() {
    const { moedas } = this.state;
    return (
      moedas.map((moeda, index) => (
        <option
          key={ index }
          value={ moeda }
        >
          {moeda}
        </option>
      ))
    );
  }

  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{userEmail}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" id="valor" />
          </label>
          <label htmlFor="describe">
            Descrição
            <input type="text" name="describe" id="describe" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              { this.createOptions() }
            </select>
          </label>
          <label htmlFor="metodo-pagamento">
            Método de pagamento
            <select name="metodo-pagamento" id="metodo-pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Tag
            <select name="categoria" id="categoria">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
