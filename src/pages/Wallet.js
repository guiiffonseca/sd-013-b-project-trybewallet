import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import thunkAPI from '../actions';

const number3 = 3;

class Wallet extends React.Component {
  componentDidMount() {
    const { saveCoins } = this.props;
    saveCoins('https://economia.awesomeapi.com.br/json/all');
  }

  render() {
    const { email, currencies } = this.props;
    // console.log(this.props);
    return (
      <div>
        <header data-testid="email-field">
          {email}
          <div data-testid="total-field">{0}</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" name="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency" value="currency">
              {Object.keys(currencies)
                .filter((moeda) => (moeda.length <= number3))
                .map((moeda) => <option key={ moeda }>{moeda}</option>)}
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select name="paymentMethod" id="paymentMethod">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Tag:
            <select name="category" id="category">
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

Wallet.propTypes = {
  saveCoins: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  currencies: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCoins: (url) => dispatch(thunkAPI(url)) });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
