import React from 'react';
import SelectCurrencies from './SelectCurrencies';
import SelectPaymentType from './SelectPaymentType';
import SimpleInput from './SimpleInput';
import SelectTagType from './SelectTagType';

class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <SimpleInput label="Valor:" id="input-value" />
        <SimpleInput label="Descrição:" id="input-description" />
        <SelectCurrencies />
        <SelectPaymentType />
        <SelectTagType />
      </form>
    );
  }
}

export default WalletForm;
