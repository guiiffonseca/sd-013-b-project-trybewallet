import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
    this.selectCurrencies = this.selectCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const updatedate = [...Object.values(data)];
        updatedate.splice(1, 1);
        this.setState({ currencies: updatedate });
      });
  }

  selectCurrencies() {
    const { currencies } = this.state;
    currencies.map((currency, index) => <option key={ index }>{ currency }</option>);
  }

  render() {
    const { currencies } = this.state;
    const { user } = this.props;
    return (
      <div>
        <section>
          <h2 data-testid="email-field">{ user.email }</h2>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </section>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              { currencies.map(
                (currency, index) => <option key={ index }>{ currency.code }</option>,
              )}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment">
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="job">Trabalho</option>
              <option value="job">Transporte</option>
              <option value="helth">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user });

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps)(Wallet);
