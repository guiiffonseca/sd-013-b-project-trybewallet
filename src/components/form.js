import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getCurrenciesFromApi, addExpensesThunk } from '../actions';

//  feito em conjunto com o Ricardo Antonio nas breakout rooms

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { addCurrencie } = this.props;
    addCurrencie();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpenses } = this.props;
    addExpenses(this.state);
  }

  //  Segundo vi em alguns códigos, uso de segundo render para diminuir tamanho de linhas
  //  Codigo de Jose Luiz Demenegi, fonte de inspiraçao.

  renderSelect() {
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <fieldset name="selects">
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            { currencies.map((option) => (
              <option key={ option } value={ option }>{ option }</option>)) }
          </select>
        </label>
        <label htmlFor="metodo">
          Método de Pagamento:
          <select
            id="metodo"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="text"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        { this.renderSelect() }
        <button type="button" onClick={ this.handleClick }>Adicionar Despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  addCurrencie: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrencie: () => dispatch(getCurrenciesFromApi()),
  addExpenses: (state) => dispatch(addExpensesThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
