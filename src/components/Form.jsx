import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addCurrenciesThunk } from '../actions';

class Form extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {

  //   };
  // }

  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  render() {
    const { currencies } = this.props;
    const currenciesArray = Object.keys(currencies);
    return (
      <form>
        <label htmlFor="input-valor">
          Valor
          <input type="number" name="valor" id="input-valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {/* <option>0</option> */}
            {
              currenciesArray.filter((elemento) => !elemento.includes('USDT'))
                .map((elemento, index) => <option key={ index }>{ elemento }</option>)
            }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesa-tipo">
          Tag
          <select id="despesa-tipo">
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

Form.propTypes = {
  addCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: () => dispatch(addCurrenciesThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
