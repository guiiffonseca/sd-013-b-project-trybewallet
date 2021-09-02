import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleTotalDespesas = this.handleTotalDespesas.bind(this);
  }

  handleTotalDespesas() {
    const { despesa } = this.props;
    const total = [];
    despesa.forEach(desp => {
      const objExchangeRates = desp.exchangeRates;
      total.push(objExchangeRates[desp.currency].ask * desp.value);
    });
    const totalDespesa = total.reduce((acc, value) => acc + value, 0);
    return `Total de Despesas RS: ${totalDespesa.toFixed(2)}`;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          Welcome
          {userEmail}
        </div>
        <div data-testid="total-field">
          { this.handleTotalDespesas() }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  userEmail: email,
  despesa: expenses,
});

export default connect(mapStateToProps)(Header);
