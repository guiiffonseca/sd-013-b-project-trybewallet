import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalOutgoing: 0,
      currency: 'BRL',
    };
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader(email, totalOutgoing, currency) {
    return (
      <header>
        <h4 data-testid="email-field">{email}</h4>
        <h4 data-testid="total-field">
          Total Outgoing:
          {totalOutgoing}
        </h4>
        <h4 data-testid="header-currency-field">
          Currency:
          {currency}
        </h4>
      </header>
    );
  }

  render() {
    const { userEmail } = this.props;
    const { totalOutgoing, currency } = this.state;
    return (
      <div>
        {this.renderHeader(userEmail,
          totalOutgoing,
          currency)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

WalletHeader.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(WalletHeader);
