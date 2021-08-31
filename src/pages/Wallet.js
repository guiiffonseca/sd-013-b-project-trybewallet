import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //     validation: false,
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.validate = this.validate.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              <option>Xablau</option>
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento
            <select name="payment-method" id="payment-method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
