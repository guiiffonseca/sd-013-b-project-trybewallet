import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencie } from '../actions';

class WalletForm extends Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="despesa">
          Valor :
          <input type="number" name="despesa" id="despesa" />
        </label>

        <label htmlFor="descricao">
          Descrição :
          <input type="text" name="descricao" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda :
          <select name="moeda" id="moeda">
            {currencies.map((curr, i) => (<option key={ i }>{ curr }</option>)) }
            {/* { currencies.map((curr, i) =>
              (<option key={ i }>{ curr.USD.code }</option>)) } */
            }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento :
          <select name="pagamento" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="categoria">
          Tag :
          <select name="categoria" id="categoria">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  setCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrencie()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
