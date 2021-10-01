import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMoedas } from '../actions/Index';

class FormDespesas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { addMoedas } = this.props;
    addMoedas();
  }

  handleSubmit(event) {
    event.preventDefault();
    const { expenses, addMoedas } = this.props;
    const { id } = this.state;
    this.setState((state) => ({ id: state.id + 1 }));
    const newExpenses = { ...this.state, id };
    const expenseAtual = { expenses, newExpenses };
    addMoedas(expenseAtual);
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    /* console.log(this.state); */
  }

  renderCurrencies() {
    const { currencies } = this.props;
    if (Object.keys(currencies).length !== 0) {
      const TAMANHOMOEDAS = 3;
      const arrayCurrency = Object.keys(currencies)
        .filter((elemento) => elemento.length === TAMANHOMOEDAS);
      return (
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency" onChange={ this.handleChange }>
            {arrayCurrency.map((elemento) => (
              <option key={ elemento } value={ elemento }>{elemento}</option>))}
          </select>
        </label>
      );
    }
  }

  // Devido o problema da quantidade máxima de linhas,  criei essa função para auxiliar no formulário.
  renderTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag" onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        {this.renderCurrencies()}
        <label htmlFor="method">
          Método de Pagamento
          <select
            name="method"
            id="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        {this.renderTag()}
        <button type="button" onClick={ this.handleSubmit }>Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addMoedas: (value) => dispatch(fetchMoedas(value)),
});

FormDespesas.propTypes = {
  addMoedas: PropTypes.func,
  currencies: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesas);

// Com a ajuda da Camila Dornas consegui realizar o Requisito 7;
