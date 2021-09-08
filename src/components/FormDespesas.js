import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMoedas } from '../actions/Index';

class FormDespesas extends React.Component {
  componentDidMount() {
    const { addMoedas } = this.props;
    addMoedas();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor-despesa">
          Valor
          <input
            type="text"
            id="valor-despesa"
            name="valor"
          />
        </label>
        <label htmlFor="descrição-despesa">
          Descrição Despesa
          <input
            type="text"
            id="descrição-despesa"
            name="descrição-despesa"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            {currencies.map((elemento) => (
              <option key={ elemento } value={ elemento }>{elemento}</option>))}
          </select>
        </label>
        <label htmlFor="selecionar-pagamento">
          Método de Pagamento
          <select name="pagamento" id="selecionar-pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="selecionar-tag">
          Tag
          <select name="pagamento" id="selecionar-tag">
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

const mapDispatchToProps = (dispatch) => ({
  addMoedas: () => dispatch(fetchMoedas()),
});

FormDespesas.propTypes = {
  addMoedas: PropTypes.func,
  currencies: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesas);

// Com a ajuda da Camila Dornas consegui realizar o Requisito 7;
