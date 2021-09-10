import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestThunk, requestAdd } from '../actions';
import Input from '../component/inputs';
import Table from '../component/table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: 'Hot Dog',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.soma = this.soma.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  // Função vinda do code-review do colega Ricardo Antonio (https://github.com/tryber/sd-013-b-project-trybewallet/commit/e03a7187a9ad0613a6b543baeb0a62ac6112baf0)
  soma() {
    const { expenses } = this.props;
    let somaTotal = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      // Parsefloat é uma HOF que retorna number de ponto flutuante de uma string. TOMAR CUIDADO POIS É BEM DOIDA ESSA FUNÇÃO.
      // Pega o Array de Obj e repete a logica interna para cada um Obj passando o proprio Obj como argumento.
      somaTotal += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    });
    // ToFixed(2) limita a 2 os numeros apos o ponto decimal.
    return somaTotal.toFixed(2);
  }

  handleClick() {
    const { saveGlobal } = this.props;
    saveGlobal(this.state);
  }

  render() {
    const { email } = this.props;
    const gastoTotal = this.soma();
    return (
      <div>
        <div>
          <p data-testid="email-field">{ `Usuario: ${email}` }</p>
          <p data-testid="header-currency-field">Cambio: BRL</p>
          <p data-testid="total-field">{ `Gasto Total: ${gastoTotal}` }</p>
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
          <input type="submit" onClick={ this.handleClick } value="Adicionar despesa" />
        </form>
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  saveGlobal: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
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
