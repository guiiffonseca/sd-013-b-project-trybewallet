import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.totalExpense = this.totalExpense.bind(this);
  }

  totalExpense() {
    return 0;
  }

  render() {
    const { email } = this.props;
    const currency = 'BRL';

    return (
      <header>
        <div>
          <p data-testid="email-field">{ `Email: ${email}` }</p>
          <p data-testid="total-field">{ `Despesa Total: ${this.totalExpense()}` }</p>
          <p data-testid="header-currency-field">{ currency }</p>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});
export default connect(mapStateToProps)(Header);
