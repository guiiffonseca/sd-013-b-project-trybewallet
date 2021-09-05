import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  render() {
    const { user } = this.props;
    const { total } = this.state;
    return (
      <div>
        <span data-testid="email-field">{ user }</span>
        <span data-testid="total-field">{ total }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  total: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user: user.email,
  // expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
