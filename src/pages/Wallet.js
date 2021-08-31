import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div data-testid="email-field">EMAIL</div>
          <div data-testid="total-field">TOTAL: 0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <section>
          <form>
            <label htmlFor="valor">
              Valor
              <input type="text" name="valor" />
            </label>
            <label htmlFor="descricao">
              Descrição
              <input type="text" name="descricao" />
            </label>
            <label htmlFor="moeda">
              Moeda
              <input type="text" name="moeda" />
            </label>
          </form>
        </section>
      </div>
    );
  }
}

export default Wallet;
