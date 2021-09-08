import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sendExpensesToState } from '../../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      currenciesObject: {},
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    /* Lembrete: coloquei o fetch na Api devido a problemas de lint. No contexto original eu declarei
    fora do didmount e chamei a função dentro dele. */
    const fetchApi = async () => {
      const url = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(url);
      const currenciesObject = await response.json();
      delete currenciesObject.USDT;

      this.setState({
        currencies: Object.entries(currenciesObject),
        currenciesObject,
      });
    };

    fetchApi();
  }

  handleChanges({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleButton() {
    const { value, description, currency, method, tag, currenciesObject } = this.state;
    const { updateWallet, expenses } = this.props;
    const storeExpenses = expenses;
    const id = storeExpenses.length;
    updateWallet({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currenciesObject,
    });
    console.log(expenses);
  }

  /* Montagem dos componentes */
  returnValue() {
    return (
      <label htmlFor="formValue">
        Valor
        <input type="text" name="value" id="formValue" onChange={ this.handleChanges } />
      </label>
    );
  }

  returnDescription() {
    return (
      <label htmlFor="formDescription">
        Descrição
        <input
          type="text"
          name="description"
          id="formDescription"
          onChange={ this.handleChanges }
        />
      </label>
    );
  }

  returnSelect() {
    const { currencies } = this.state;
    // console.log(currencies);
    return (
      <label htmlFor="formSelect">
        Moeda
        <select name="currency" id="formSelect" onChange={ this.handleChanges }>
          {currencies.map((currencie, index) => (
            <option
              key={ index }
              name="currency"
              value={ currencie[1].code }
            >
              {currencie[1].code}
            </option>
          ))}
        </select>
      </label>
    );
  }

  returnPaymentMethod() {
    return (
      <label htmlFor="formPaymentMethod">
        Método de pagamento
        <select name="method" id="formPaymentMethod" onChange={ this.handleChanges }>
          <option value="dinheiro">Dinheiro</option>
          <option value="crédito">Cartão de crédito</option>
          <option value="débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  returnExpensesCategories() {
    return (
      <label htmlFor="formTag">
        Tag
        <select name="tag" id="formTag" onChange={ this.handleChanges }>
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </label>
    );
  }

  returnAddExpensesButton() {
    return (
      <button
        type="button"
        onClick={ this.handleButton }
      >
        Adicionar Despesas
      </button>
    );
  }

  render() {
    return (
      <form>
        {this.returnValue()}
        {this.returnDescription()}
        {this.returnSelect()}
        {this.returnPaymentMethod()}
        {this.returnExpensesCategories()}
        {this.returnAddExpensesButton()}
      </form>
    );
  }
}

Form.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateWallet: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateWallet: (payload) => dispatch(sendExpensesToState(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

/*
Como remover propriedade de um objeto (delete), sugestão da turma no grupo de whatsapp
https://igluonline.com/como-remover-uma-propriedade-de-um-objeto-javascript/
*/
