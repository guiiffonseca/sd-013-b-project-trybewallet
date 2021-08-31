import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <>
        <p data-testid="email-field">{userEmail.email}</p>
        <p>
          Gastos: R$
          <span data-testid="total-field">0</span>
        </p>
        <p>
          Câmbio:
          <span data-testid="header-currency-field">BRL</span>
        </p>
        <form>
          <label htmlFor="expenseValue">
            Valor
            <input type="text" name="expenseValue" id="expenseValue" />
          </label>
          <label htmlFor="expenseDescription">
            Descrição
            <input type="text" name="expenseDescription" id="expenseDescription" />
          </label>
          <label htmlFor="selectCurrency">
            Moeda
            <select name="selectCurrency" id="selectCurrency">
              <option value="PVU">PVU</option>
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de Pagamento
            <select name="paymentMethod" id="paymentMethod">
              <option value="cash">Dinheiro</option>
              <option value="creditCard">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="expenseTag">
            Tag
            <select name="selectExpenseType" id="expenseTag">
              <option value="alimentation">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="health">Saúde</option>
              <option value="transport">Transporte</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user,
});

export default connect(mapStateToProps)(Wallet);
