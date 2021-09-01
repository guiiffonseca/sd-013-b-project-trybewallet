import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';

export default class AddForm extends React.Component {
  render() {
    const { changeFunc, currencies, toAdd } = this.props;
    const { value, description, currency, method, tag } = toAdd;
    const methodOptions = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          name="value"
          text="Valor"
          type="number"
          value={ value }
          change={ changeFunc }
        />
        <Input
          name="description"
          text="Descrição"
          type="text"
          value={ description }
          change={ changeFunc }
        />
        <Select
          name="currency"
          text="Moeda"
          value={ currency }
          change={ changeFunc }
          options={ currencies }
        />
        <Select
          name="method"
          text="Método de pagamento"
          value={ method }
          change={ changeFunc }
          options={ methodOptions }
        />
        <Select
          name="tag"
          text="Tag"
          value={ tag }
          change={ changeFunc }
          options={ tagOptions }
        />
      </form>
    );
  }
}

AddForm.propTypes = {
  changeFunc: PropTypes.func.isRequired,
  toAdd: PropTypes.objectOf().isRequired,
  currencies: PropTypes.arrayOf().isRequired,
};
