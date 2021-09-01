import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';

export default class AddExpensesForm extends Component {
  render() {
    return (
      <form className="add-expenses">
        <Input
          type="number"
          name="valor"
          label="Valor"
          id="valor"
          step="0.01"
        />

        <Input
          type="text"
          name="descricao"
          label="Descrição"
          id="descricao"
        />

        <Select
          id="moeda"
          label="Moeda"
          options={ [] }
        />

        <Select
          id="pagamento"
          label="Método de pagamento"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />

        <Select
          id="tag"
          label="Tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
        
        <Button
          label="Adicionar despesa"
        />
      </form>
    );
  }
}
