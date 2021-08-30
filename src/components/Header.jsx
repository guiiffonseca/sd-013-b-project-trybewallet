import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, totalExpenses } = this.props;
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
          { totalExpenses }
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  totalExpenses: wallet.totalExpenses,
});

export default connect(mapStateToProps)(Header);
