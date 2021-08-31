import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletHeader from './WalletHeader';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      moeda: 'BRL',
    };
  }

  render() {
    const { user } = this.props;
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
              <option value={ moeda }>
                {moeda}
              </option>
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
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};
