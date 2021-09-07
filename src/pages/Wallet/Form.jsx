import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
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
      });
    };

    fetchApi();
  }

  returnValue() {
    return (
      <label htmlFor="formValue">
        Valor
        <input type="text" name="name" id="formValue" />
      </label>
    );
  }

  returnDescription() {
    return (
      <label htmlFor="formDescription">
        Descrição
        <input type="text" name="name" id="formDescription" />
      </label>
    );
  }

  returnSelect() {
    const { currencies } = this.state;
    return (
      <label htmlFor="formSelect">
        Moeda
        <select name="" id="formSelect">
          {currencies.map((currencie, index) => (
            <option key={ index } value={ currencie[1].code }>{currencie[1].code}</option>
          ))}
        </select>
      </label>
    );
  }

  returnPaymentMethod() {
    return (
      <label htmlFor="formPaymentMethod">
        Método de pagamento
        <select name="" id="formPaymentMethod">
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
        <select name="tag" id="formTag">
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </label>
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
      </form>
    );
  }
}

export default Form;

/*
Como remover propriedade de um objeto (delete), sugestão da turma no grupo de whatsapp
https://igluonline.com/como-remover-uma-propriedade-de-um-objeto-javascript/
*/
