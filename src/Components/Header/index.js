import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.user,
    };
  }

  reducerHelp(acc, curr) {
    return acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask);
  }

  render() {
    const { email } = this.state;
    const { expenses } = this.props;
    let valor = 0;
    if (expenses.length > 0) {
      valor = expenses.reduce(this.reducerHelp, 0);
    }
    return (
      <div className="header">
        <h1 data-testid="email-field">{ email }</h1>
        <h1 data-testid="total-field">
          { valor.toFixed(2) }
        </h1>
        <h1 data-testid="header-currency-field"> BRL</h1>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  user: dispatch.user.email,
  expenses: dispatch.wallet.expenses,
});

Header.propTypes = {
  user: propTypes.string.isRequired,
  expenses: propTypes.objectOf(propTypes.func).isRequired,
};

export default connect(mapStateToProps)(Header);