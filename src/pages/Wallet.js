import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import action from '../actions';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {
      globalState: { user },
    } = this.props;
    return (
      <div>
        <header data-testid="email-field">{user.email}</header>
        <Link to="/">back to login</Link>
        <div>TrybeWallet I AM WALLET</div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
        <label htmlFor="input-one" data-testid="value-input">
          Valor
          <input type="text" id="input-one" />
        </label>
        <label htmlFor="input-two">
          Descrição
          <input type="text" id="input-two" />
        </label>
        <label htmlFor="wallet-select" data-testid="currency-input">
          Moeda
          <select id="wallet-select" name="moeda">
            <option key="1" value="1">
              option
            </option>
          </select>
        </label>
        <label htmlFor="wallet-select-2" data-testid="currency-input">
          Método de pagamento
          <select id="wallet-select-2">
            {/* Dinheiro', 'Cartão de crédito' e 'Cartão de débito'. */}
            <option key="11">Dinheiro</option>
            <option key="21">Cartão de crédito</option>
            <option key="31">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="wallet-select-3" data-testid="currency-input">
          Tag
          <select id="wallet-select-3">
            {/* 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'. */}
            <option key="111">Alimentação</option>
            <option key="211">Lazer</option>
            <option key="311">Trabalho</option>
            <option key="312">Transporte</option>
            <option key="313">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Wallet.propTypes = {
  globalState: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ).isRequired,
};

function mapStateToProps(state) {
  return {
    globalState: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    user: (item) => dispatch(action.user(item)),
    // updateISSLocation: async () => await dispatch(action.updateISSLocation()),
    // getISSLocation: () => dispatch(action.getISSLocationThunk()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
