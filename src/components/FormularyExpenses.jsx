import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrencies, fetchCurrencieThunk, exchangeRatesThunk } from '../actions';

class FormularyExpenses extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.optionsCurrency = this.optionsCurrency.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencie } = this.props;
    this.optionsCurrency();
    fetchCurrencie();
  }

  handleChange({ target }) {
    const { value, name } = target;
    return this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { SET_EXPENSES } = this.props;
    SET_EXPENSES(this.state);
    this.setState((previouState) => ({
      id: previouState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  optionsCurrency() {
    const { currencies } = this.props;
    const options = currencies.map((moeda) => (
      <option
        key={ moeda }
        id={ moeda }
        value={ moeda }
      >
        { moeda }
      </option>
    ));
    return options;
  }

  renderInput() {
    const { value, description } = this.state;
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </>
    );
  }

  renderSelect() {
    const { currency, method, tag } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            value={ currency }
            name="currency"
            id="currency"
            onChange={ this.handleChange }
          >
            {this.optionsCurrency()}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            value={ method }
            name="method"
            id="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select value={ tag } name="tag" id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    return (
      <form>
        {this.renderInput()}
        {this.renderSelect()}
        <button type="button" onClick={ this.handleSubmit }>Adicionar despesas </button>
        <button data-testid="delete-bdn" type="button">Deletar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  SET_CURRENCIES: (payload) => dispatch(setCurrencies(payload)),
  fetchCurrencie: () => dispatch(fetchCurrencieThunk()),
  SET_EXPENSES: (payload) => dispatch(exchangeRatesThunk(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormularyExpenses.propTypes = {
  fetchCurrencie: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
  map: PropTypes.func.isRequired,
  SET_EXPENSES: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormularyExpenses);
