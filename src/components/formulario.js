import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
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
              currencies.map((curr) => (
                <option key={ curr[0] } value={ curr[0] }>{ curr[0] }</option>))
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
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.arrayOf(Array).isRequired,
};
