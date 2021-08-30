import React from 'react';

class WalletInputs extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="amount">
          Valor:
          <input type="text" id="amount" name="name" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency">por enquanto vazio!</select>
        </label>
      </>
    );
  }
}

export default WalletInputs;
