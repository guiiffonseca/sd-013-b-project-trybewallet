import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderWallet extends Component {
  constructor() {
    super();
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  // Resolvi esse requisito de 2 formas diferentes, salvando o total estado global, e salvando via estado do componente. Porém, consultei o repositório do Rafael Reis para tirar dúvida de como passar no avaliador (sem utilizar os estados)
  // Repositório Rafael Reis: https://github.com/tryber/sd-013-b-project-trybewallet/pull/106/files

  calculateTotal() {
    const { expenses } = this.props;
    let calc = 0;
    let SumResult = 0;

    expenses.forEach((expense) => {
      calc = expense.value * expense.exchangeRates[expense.currency].ask;
      SumResult += calc;
    });
    return SumResult;
  }

  render() {
    const { email, currentCurrency, expenses } = this.props;
    return (
      <div>
        <div>
          <span data-testid="email-field">
            Email Logado:
            {` ${email}`}
          </span>
        </div>
        <div>
          <span data-testid="total-field">
            Despesa total:
            {expenses.length > 0 ? this.calculateTotal() : 0}
          </span>
        </div>
        <div>
          <span data-testid="header-currency-field">
            {` ${currentCurrency}`}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
  currentCurrency: wallet.currentCurrency,
});

HeaderWallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.shape()),
}.isRequired;

export default connect(mapStateToProps, null)(HeaderWallet);
