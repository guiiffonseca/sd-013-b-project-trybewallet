import React from 'react';

export class FormWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { respostaAPI } = this.props;
    console.log(respostaAPI);
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" id="valor" name="valor" />
          </label>
          <br />
          <label htmlFor="descricao">
            Descrição :
            <input type="text" id="descricao" name="descricao" />
          </label>
          <label htmlFor="selectMoeda">
            Moeda
            <select name="selectMoeda" id="selectMoeda">
              { respostaAPI ? 
                  respostaAPI.map((item)=> item[0] !== 'USDT' ? <option key={ item[0] }> { item[0] } </option> : '') : ''
              }
            </select>
          </label>
          <br />
          <label htmlFor="selectMetodo">
            Método de Pagamento
            <select name="selectMetodo" id="selectMetodo">
              <option value="valor1" selected>Dinheiro</option>
              <option value="valor1" selected>Cartão de crédito</option>
              <option value="valor1" selected>Cartão de débito</option>
            </select>
          </label>
          <br />
          <label htmlFor="selectMetodo">
            Tag :
            <select name="selectMetodo" id="selectMetodo">
              <option value="Alimentação" selected>Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
        <button type="submit">Adicionar Despesa</button>
      </div>
    );
  }
}

export default FormWallet;
