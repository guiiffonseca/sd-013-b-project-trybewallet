import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cambio: 'BRL',
      gastoTotal: 0,
    };
  }

  componentDidMount() {
    const { request } = this.props;
    request();
  }

  render() {
    const { email, currencies } = this.props;
    const { cambio, gastoTotal } = this.state;
    const currencie = Object.keys(currencies);
    const current = currencie.filter((cu) => cu !== 'USDT');
    return (
      <div>
        Trybe Wallet
        <div>
          <p data-testid="email-field">{ `Usuario: ${email}` }</p>
          <p data-testid="header-currency-field">{ `Cambio: ${cambio}` }</p>
          <p data-testid="total-field">{ `Gasto Total: ${gastoTotal}` }</p>
        </div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input type="text" id="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select type="region" id="moeda">
              {current.map((moeda) => <option key={ moeda }>{ moeda }</option>)}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
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

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  request: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(requestThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
