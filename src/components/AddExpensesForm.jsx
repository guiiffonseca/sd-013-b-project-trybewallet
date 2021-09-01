import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Input, Select } from './Index';

export default class AddExpensesForm extends Component {
  render() {
    const { moedas } = this.props;

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
          options={ moedas }
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

AddExpensesForm.propTypes = {
  moedas: PropTypes.arrayOf(PropTypes.any).isRequired,
};
