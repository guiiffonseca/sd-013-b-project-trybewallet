import React from 'react';

export default function Form() {
  return (
    <form>
      <label htmlFor="valor">
        Valor:
        <input id="valor" type="text" name="name" />
      </label>
      <label htmlFor="describe">
        Descrição:
        <input type="text" id="describe" name="name" />
      </label>
      <label htmlFor="coin">
        Moeda:
        <select name="" id="coin">
          <option value="" />
        </select>
      </label>
      <label htmlFor="pagamento">
        Método de pagamento:
        <select name="" id="pagamento">
          <option value="">Dinheiro</option>
          <option value="">Cartão de crédito</option>
          <option value="">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag:
        <select name="" id="tag">
          <option value="">Alimentação</option>
          <option value="">Lazer</option>
          <option value="">Trabalho</option>
          <option value="">Transporte</option>
          <option value="">Saúde</option>
        </select>
      </label>
    </form>
  );
}
