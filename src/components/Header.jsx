import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.calcTotalExpenses = this.calcTotalExpenses.bind(this);
  }

  calcTotalExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => acc + curr, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <p
          data-testid="email-field"
        >
          { email}
        </p>
        <p
          data-testid="total-field"
        >
          { this.calcTotalExpenses() }
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
