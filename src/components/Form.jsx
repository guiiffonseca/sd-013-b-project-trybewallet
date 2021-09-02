import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addCurrenciesThunk, addExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tipoDespesa: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderFormInput = this.renderFormInput.bind(this);
    this.renderFormSelect = this.renderFormSelect.bind(this);
    this.submitDespesa = this.submitDespesa.bind(this);
  }

  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  submitDespesa(event) {
    event.preventDefault();
    const { currencies, walleteLength, addExpense } = this.props;
    const obj = {
      ...this.state,
      id: walleteLength.length,
      exchangeRates: currencies,
    };
    // console.log(obj);
    addExpense(obj);
    // console.log(walleteLength);
  }

  renderFormInput() {
    const { valor, descricao } = this.state;
    return (
      <>
        <label htmlFor="input-valor">
          Valor
          <input
            type="number"
            name="valor"
            id="input-valor"
            onChange={ this.handleChange }
            value={ valor }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea
            id="descricao"
            name="descricao"
            onChange={ this.handleChange }
            value={ descricao }
          />
        </label>
      </>
    );
  }

  renderFormSelect() {
    const { currencies } = this.props;
    const currenciesArray = Object.keys(currencies);
    const { pagamento, moeda, tipoDespesa } = this.state;
    return (
      <>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" onChange={ this.handleChange } value={ moeda }>
            {
              currenciesArray.filter((elemento) => !elemento.includes('USDT'))
                .map((elemento, index) => <option key={ index }>{ elemento }</option>)
            }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            id="pagamento"
            name="pagamento"
            onChange={ this.handleChange }
            value={ pagamento }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesa-tipo">
          Tag
          <select
            id="despesa-tipo"
            name="tipoDespesa"
            onChange={ this.handleChange }
            value={ tipoDespesa }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    return (
      <form>
        {
          this.renderFormInput()
        }
        {
          this.renderFormSelect()
        }
        <button
          type="submit"
          onClick={ (event) => this.submitDespesa(event) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  addCurrencies: PropTypes.func.isRequired,
  walleteLength: PropTypes.arrayOf(PropTypes.any).isRequired,
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: () => dispatch(addCurrenciesThunk()),
  addExpense: (obj) => dispatch(addExpenses(obj)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  walleteLength: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
