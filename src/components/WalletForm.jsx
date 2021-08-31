import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletActionThunk } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { add } = this.props;
    add();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" name="name" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" name="name" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {
              Object.keys(currencies).map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>dinheiro</option>
            <option>cartão de crédito</option>
            <option>cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option>alimentação</option>
            <option>lazer</option>
            <option>trabalho</option>
            <option>transporte</option>
            <option>saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  add: PropTypes.func,
  currencies: PropTypes.objectOf(PropTypes.string),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(walletActionThunk()),
});

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
