import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletHeader from './WalletHeader';
import { fetchCoins } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      moeda: 'BRL',
    };
  }

  componentDidMount() {
    const { sendCoin } = this.props;
    sendCoin();
  }

  render() {
    const { user, wallet: { currencies } } = this.props;
    const { total, moeda } = this.state;
    return (
      <div>
        <WalletHeader total={ total } moeda={ moeda } user={ user } />
        <br />
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" id="valor" />
          </label>
          {' '}
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              {currencies && currencies.map((c, i) => <option key={ i }>{ c }</option>)}
            </select>
          </label>
          {' '}
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option value="Dinheiro"> Dinheiro </option>
              <option value="crédito"> Cartão de crédito </option>
              <option value="débito"> Cartão de débito </option>
            </select>
          </label>
          {' '}
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option value="Alimentação"> Alimentação </option>
              <option value="Lazer"> Lazer </option>
              <option value="Trabalho"> Trabalho </option>
              <option value="Transporte"> Transporte </option>
              <option value="Saúde"> Saúde </option>
            </select>
          </label>
          {' '}
          <label htmlFor="desc">
            Descrição:
            <textarea type="text" id="desc" rows="1" style={ { verticalAlign: 'top' } } />
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  sendCoin: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  sendCoin: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
