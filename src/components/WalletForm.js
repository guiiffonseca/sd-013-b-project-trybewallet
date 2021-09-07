import React from 'react';
import SelectCurrencies from './SelectCurrencies';
import SimpleInput from './SimpleInput';

class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <SimpleInput label="Valor:" id="input-value" />
        <SimpleInput label="Descrição:" id="input-description" />
        <SelectCurrencies />
        <label htmlFor="input-payment-type">
          Método de pagamento:
          <select id="input-payment-type">
            <option name="cash" id="cash">
              Dinheiro
            </option>
            <option name="debit" id="debit">
              Cartão de Débito
            </option>
            <option name="credit" id="credit">
              Cartão de Crédito
            </option>
          </select>
        </label>
        <label htmlFor="input-tag-type">
          Tag:
          <select id="input-tag-type">
            <option name="food" id="food">
              Alimentação
            </option>
            <option name="lazer" id="lazer">
              Lazer
            </option>
            <option name="work" id="work">
              Trabalho
            </option>
            <option name="transport" id="transport">
              Transporte
            </option>
            <option name="health" id="health">
              Saúde
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForm;
