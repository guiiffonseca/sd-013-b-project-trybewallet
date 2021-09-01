import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currency } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            id="valor"
            type="text"
          />
        </label>
        <label htmlFor="descript">
          Descrição
          <input
            id="descript"
            type="text"
          />
        </label>
        <label htmlFor="select-moeda">
          Moeda
          <select id="select-moeda">
            {
              currency.map((pay) => (
                <option key={ pay[0] } value={ pay[0] }>{ pay[0] }</option>))
            }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option value="Dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.payload,
});

export default connect(mapStateToProps)(Form);

Form.propTypes = {
  currency: PropTypes.arrayOf(Array).isRequired,
};
