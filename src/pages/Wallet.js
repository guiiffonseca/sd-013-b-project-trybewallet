import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import trybe from '../images/trybe.png';
import '../images/images.css';
import fetchAPI from '../api/fetchData';

class Wallet extends React.Component {
  constructor() {
    super();
    this.calculateExpenses = this.calculateExpenses.bind(this);
    this.getData = this.getData.bind(this);
    this.addTag = this.addTag.bind(this);
    this.state = {
      isCalculating: true,
      data: {},
    };
  }

  async getData() {
    let { data } = this.state;
    data = await fetchAPI();
    console.log(data);
  }

  calculateExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, cv) => acc + cv);
    this.setState({
      isCalculating: false,
    });
    return totalExpenses;
  }

  addTag() {
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { isCalculating } = this.state;
    const { email } = this.props;
    return (
      <header className="flexbox-container">
        <img className="main-logo" src={ trybe } alt="Trybe logo" />
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          { isCalculating
            ? 0
            : this.calculateExpenses }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" />
          </label>
          <label htmlFor="select">
            Moeda:
            <select id="select">Select</select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento:
            <select id="paymentMethod">
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </label>
          {this.addTag()}
        </form>

      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number),
};

Wallet.defaultProps = {
  expenses: [0],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
