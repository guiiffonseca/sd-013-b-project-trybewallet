import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalValue: 0,
      exchange: 'BRL',
    };
  }

  componentDidMount() {
    const { moeda } = this.props;
    moeda();
  }

  render() {
    const { email, coin } = this.props;
    const { totalValue, exchange } = this.state;
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <>
        <header data-testid="email-field">{`Email Logado: ${email}`}</header>
        <p data-testid="total-field">{`Valor total das despesas: R$${totalValue}`}</p>
        <p data-testid="header-currency-field">{`Câmbio usado: ${exchange}`}</p>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" name="Descrição" id="Descrição" />
          </label>
          <label htmlFor="Moeda">
            Moeda:
            <select name="Moeda" id="Moeda">
              {coin && Object.keys(coin).filter((money) => money !== 'USDT')
                .map((money) => <option key={ money } value={ money }>{money}</option>)}
            </select>
          </label>
          <label htmlFor="Método de pagamento">
            Método de pagamento:
            <select name="Método de pagamento" id="Método de pagamento">
              <option>Selecione</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag:
            <select name="Tag" id="Tag">
              <option value="">Selecione</option>
              {tagOptions.map((text) => (
                <option key={ text } value={ text }>{text}</option>
              ))}
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  moeda: PropTypes.func.isRequired,
  coin: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  moeda: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  coin: state.wallet.moeda,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
