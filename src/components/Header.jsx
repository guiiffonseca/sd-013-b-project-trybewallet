import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
    this.sumDispenses = this.sumDispenses.bind(this);
  }

  sumDispenses() {
    const { expenses } = this.props;
    if (expenses.length !== 0) {
      const accValueExpenses = expenses
        .reduce((acc, curr) => {
          acc += curr.value * curr.exchangeRates[curr.currency].ask;
          return acc;
        }, 0);
      return accValueExpenses;
    }
    return 0;
  }

  render() {
    const { nome } = this.props;
    return (
      <div>
        <h3 data-testid="email-field">{`Bem vindo a sua carteira digital ${nome}!`}</h3>
        <p data-testid="total-field">{this.sumDispenses()}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.shape({
    length: PropTypes.number,
    reduce: PropTypes.func,
  }).isRequired,
  nome: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  nome: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
